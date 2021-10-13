// const userController = require('../app/controllers/user.ctrl')
const User = require("../app/models/User")
const passport  = require("passport")
const authFacebook = require("../app/controllers/auth.ctrl")
module.exports = (router) => {


    router
        .route("/loginFacebook")
        .post(authFacebook)


  router
    .route("/auth/facebook")
    .get(passport.authenticate("facebook", { scope: ["email"] })),
  //
  router
    .route("/auth/facebook/callback")
    .get(
      passport.authenticate("facebook", { failureRedirect: "/login" }),
      function (req, res) {
        // Successful authentication, redirect home.
        console.log("user:::::::::::::::::::", req.user)
        res.status(200).send({
            fullname: req.user.fullname,
            photo: req.user.photo,
            email: req.user.email,
        })
      }
    );
  //
  router
  .route("/login")
  .get((req, res) => {
    res.send("Failure");
  });
}; 
