const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  id: {type: String, required: true}
});

const Users = mongoose.model('Users', userSchema);

module.exports = {Users};