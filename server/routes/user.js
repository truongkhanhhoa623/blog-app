
const userController = require('../app/controllers/user.ctrl')



module.exports = (router)=>{
    router.route('/user/:id',).get(userController.getUser)
    router.route('/user').post(userController.addUser)
}