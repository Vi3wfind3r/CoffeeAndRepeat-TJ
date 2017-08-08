const path = require('path');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const mongoose = require('mongoose');

const {Users} = require('./models');

let secret = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL
};

if(process.env.NODE_ENV != 'production') {
  secret = require('./secret');
}

const app = express();


const database = { 
};

app.use(passport.initialize());

passport.use(
    new GoogleStrategy({
      clientID:  secret.CLIENT_ID,
      clientSecret: secret.CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
        // Job 1: Set up Mongo/Mongoose, create a User model which store the
        // google id, and the access token
        // Job 2: Update this callback to either update or create the user
        // so it contains the correct access token
      const user = database[accessToken] = {
        googleId: profile.id,
        accessToken: accessToken,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        token: accessToken
      };

      return cb(null, user);
    }
));

passport.use(
    new BearerStrategy(
        (token, done) => {
            // Job 3: Update this callback to try to find a user with a
            // matching access token.  If they exist, let em in, if not,
            // don't.
          Users.findOne({token: token})
          .then(user => {
            if(!user){
              return done(null, false);
            }
            return done(null, user);
          });
        }
    )
);


app.get('/api/auth/google',
    passport.authenticate('google', {scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']}));

app.get('/api/auth/google/callback',
    passport.authenticate('google', {
        // succesRedirect: '/success',
      failureRedirect: '/',
      session: false
    }),
    (req, res) => {
      Users.findOneAndUpdate({id: req.user.googleId},
        {$set: {
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          id: req.user.googleId,
          token: req.user.accessToken
        }}, {upsert: true, new: true})
        .then(user => {
          res.cookie('accessToken', req.user.accessToken, {expires: 0});
          res.redirect('/questions');
        });
    }
);


app.get('/api/auth/logout', (req, res) => {
  req.logout();
  res.clearCookie('accessToken');
  res.redirect('/');
});

app.get('/api/me',
    passport.authenticate('bearer', {session: false}),
    (req, res) => {
      Users.findOne({token: req.user.token})
      .then(user => {
        console.log(user);
        res.status(200).send(user);
      })
      .catch(err => {
        console.error(err);
        res.status(204).send(err);
      });
    });


app.get('/api/questions',
    passport.authenticate('bearer', {session: false}),
    (req, res) => res.json(['Question 1', 'Question 2'])
);

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(port=4000) {
  return new Promise((resolve, reject) => {
    mongoose.connect(secret.DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }

      server = app.listen(port, () => {
        console.log(`Your app is listening on ${port}`);
        resolve();
      }).on('error', reject);
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
  
};