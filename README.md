# Coffee & Repeat
by Tanner Gill and Jamie Wang

Love coffee? Feel lost in the growing list of fancy java drinks you can order at your local neighborhood hot spot? Welcome to Coffee & Repeat! We will teach you the basic groups of coffee in a super effective way learning: spaced repitition. You will answer a series of questions and incorrect questions will be repeated shortly after you see them to help solidify the knowledge in your brain. You will have a fun time and finish feeling confident when ordering your next cup of joe.

## Production App 

http://coffee-repeat.herokuapp.com/

## Technology Used

**FrontEnd**: HTML, CSS, Javascript, React, Redux <br/>
**BackEnd**: NodeJS, Express, OAuth, MongoDB, Mongoose, Mlab <br/>
**Deployment**: Heroku <br/> 

## How to use our code

First, fork the repo on Github to your own account.

### Clone the repo

```sh
$ git clone https://github.com/thinkful-c11/CoffeeAndRepeat-TJ.git
```

```sh
$ cd CoffeeAndRepeat-TJ
```

```sh
$ npm install
```

You can run it locally now with `npm run dev`, but the Google OAuth stuff won't work without your own credentials.  See below on how to set this up!

### Get Google OAuth Credentials

Visit https://console.developers.google.com

* Navigate to Library 
* Under 'Social APIs', Click 'Google+ API'
* Click 'Enable' at the top (if it isn't already)


* Navigate to Credentials
* It may require you to configure OAuth consent screen.
* Click 'Create credentials'
* Choose 'OAuth Client ID'
* Choose 'Web application'
* Add `http://localhost:8080` to Authorized JavaScript origins
* Add `http://localhost:8080/api/auth/google/callback` to Authorized redirect URIs
* Click 'Create'

You should get a Client ID and Secret.

Back in your project locally, create an `secret.js` file in the `/server` directory:

(Use the client ID and secret we just got from Google)

```js
module.exports = {
  CLIENT_ID: 'yourId123.apps.googleusercontent.com',
  CLIENT_SECRET: 'yoursecret'
}
```

This file is in ignored by git because it is in your `.gitignore`. Never commit or push 'secret.js', the client id and secret need to be kept safe like a password.

### Local Development

```sh
  npm run dev
```

## Deployment to Heroku

```sh
$ heroku create
```

Configure your Google client id and secret on Heroku:

```sh
$ heroku config:set CLIENT_ID=yourId123.apps.googleusercontent.com CLIENT_SECRET=yoursecret
```

(You can also do this on dashboard.heroku.com under your app's settings.)

### To deploy:

```sh
$ git push heroku master
```

Your app should be live on Heroku soon, but if you try to `Log in with Google`, you will get a 400 error. Take note of your new app's URL.


#### Updating Google API authorized origins


To fix this, go back to the Google API Dashboard and:

(You might need to use `http` and or `http` for your Heroku URIs)

- Add `http://your-app-name-123.herokuapp.com` to Authorized JavaScript origins
- Add `http://your-app-name-123.herokuapp.com/api/auth/google/callback` to Authorized redirect URIs

Try to log in  `Log in with Google` again, and you're golden!
