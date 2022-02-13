const userController = require("../app/controllers/auth.ctrl");
const authToken = require("../middlewares/auth");

const authController = require("../app/controllers/auth.ctrl");

module.exports = (router) => {
 // login Facebook
  router.post("/facebook", authController.authFacebook);
  // get profile user
  router.get("/profile", authToken, authController.getProfile);
  // logout 
  router.get("/logout", authToken, authController.logout);
  // register new user with email-password
  router.post("/register", authController.register);
  router.post("/login", authController.login)
};
