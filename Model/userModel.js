const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    level:String,
    score:Number

}, {
    versionKey:false
})

const UserModel = mongoose.model("post", userSchema);

module.exports = { UserModel };