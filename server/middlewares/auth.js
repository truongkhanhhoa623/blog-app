const jwt = require("jsonwebtoken");
const User = require("../app/models/User");

module.exports = (req, res, next) => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjc3LCJpYXQiOjE2NDUxMjY1NTR9.5YGlvx9ZSRuszY_58Vu5yxQrjPtaqNhSg0jTuakyEPc";
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
