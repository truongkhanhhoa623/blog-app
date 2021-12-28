const jwt = require("jsonwebtoken");
const User = require("../app/models/User");

module.exports = (req, res, next) => {
    let token = req.cookies.auth;
    console.log(token);
    if(token) {
        User.findToken(token, (err, user)=>{
            if(err) throw err;
            if(!user) return res.send({ msg: "User not found"})
            req.user = user
            req.token = token;
            next()
        })
    }else{
        res.send({ msg: "Token not found"})
    }
};
