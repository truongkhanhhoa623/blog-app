const jwt = require("jsonwebtoken");
const User = require("../app/models/User");

module.exports = (req, res, next) => {
    let token = req.cookies.auth;
    console.log("BE", token)
    if(token) {
        User.findToken(token, (err, user)=>{
            if(err) throw err;
            if(!user) return res.send({ msg: "User not found"})
            req.user = user
            req.token = token;
            next()
        })
    }else{
        res.status(400).send({ msg: "Token not found"})
    }
};
