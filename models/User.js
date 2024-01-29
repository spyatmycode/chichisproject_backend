const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }

},{
    timestamps: true
})


userSchema.statics.signup = async function (email, password, username) {

    const emailExists = await this.findOne({ email })

    if (emailExists) throw Error('Email already in use');

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);

    const newuser = await this.create({ email: email, password: hash, username: username});


    return newuser



}

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });

    if (!user) throw Error("Email does not exist");

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw Error("Incorrect login credentials");


    return user;


}


const User = mongoose.model('User', userSchema)

module.exports = User