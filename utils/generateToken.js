const jwt = require("jsonwebtoken")

 const generateAccessToken = (email)=>{

    return jwt.sign({email},"12jhwdfvsdfvdfva",{expiresIn:'1d'});

}


module.exports = generateAccessToken