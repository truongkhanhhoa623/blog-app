const User = require('../models/User')

module.exports = {
    //[GET] /user/:userId
    getUser: (req, res, next) =>{
        User.findById(req.params.id)
            .then((user) =>{
                res.status(200).send(user)
            })
    },
    //[POST] /user
    addUser: (req, res, next)=>{
        const user = new User(req.body)
        user.save()
        .then(()=>{
            res.status(200).send({msg: "Create success user!" })
        })
    }
}