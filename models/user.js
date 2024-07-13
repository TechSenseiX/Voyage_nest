const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        username:String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose);//hashing,salting already implement kar dega

module.exports = mongoose.model("User", userSchema);