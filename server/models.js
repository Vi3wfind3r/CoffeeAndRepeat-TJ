const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  id: {type: String, required: true},
  img: {type: String}
});

const User = mongoose.model('User', userSchema);

module.exports = {User};