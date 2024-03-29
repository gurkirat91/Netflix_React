const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
})

userSchema.plugin(passportLocalMongoose) //for hash ans salt...

module.exports = mongoose.model('User', userSchema)
