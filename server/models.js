const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  id: {type: String, required: true},
  token: {type: String, required: true}
});

const questionSchema = mongoose.Schema({
  question: {type: String, required: true},
  answer: {type: String, required: true}
});

const Questions = mongoose.model('Questions', questionSchema);

const Users = mongoose.model('Users', userSchema);

module.exports = {Users, Questions};