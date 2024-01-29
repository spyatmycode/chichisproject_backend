const User = require("../models/User");
const bcrypt = require("bcrypt")
const genToken = require("../utils/generateToken")



const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) throw Error("Enter all credentials");

        const user = await User.findOne({ email });

        if (!user) throw Error("User not found!");

        const matchPassword =await bcrypt.compare(password, user.password);

        console.log(matchPassword,"match?");

        if (!matchPassword) throw Error("Wrong credentials");

        return res.status(200).json({ message: "success", data:{token: genToken(email), user:user} })
    } catch (error) {

        console.log(error);
        return res.status(400).json({message: error.message})

    }
}


const signUp = async (req, res) => {
    const { email, password, username } = req.body;
    try {

        if (!email || !password || !username) throw Error("Enter all credentials");

        const user = await User.findOne({ email });

        if (user) throw Error("User exists please ! Login");

        const newuser = await User.signup(email, password, username);

        return res.status(200).json({ message: "success", data: {
            token: genToken(email),
            user: newuser
        }})
    } catch (error) {

        console.log(error);
        return res.status(400).json({message: error.message})

    }
}



module.exports = { signIn, signUp };