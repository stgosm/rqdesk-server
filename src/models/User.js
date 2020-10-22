const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: String,
    userFirstName: String,
    userLastName: String,
    userEmail: String,
    userPassword: String,
    userRole: String,
},{
  timestamps: true,
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = { UserModel, UserSchema };