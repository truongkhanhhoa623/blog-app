const User = require("../models/User");
const fetch = require("node-fetch");
module.exports = {
  //[POST]
  authFacebook: (req, res, next) => {
    const { userID, accessToken } = req.body;
    let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;
    fetch(urlGraphFacebook, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        const { id, email, name, picture } = response;
        console.log("userFacebook", response);
        User.findOne({ facebookId: id }, (err, user) => {
          if (err) {
            res.send({ msg: "Failure " });
          } else {
            if (user) {
              user.generateAuthToken().then((token) => {
                res.cookie(`auth`, token, {
                  //   maxAge: 10000,
                  // expires works the same as the maxAge
                  //   expires: new Date("01 12 2021"),
                  secure: true,
                  httpOnly: true,
                  sameSite: "lax",
                });
                res.send({ user });
              });
            } else {
              const newUser = new User({
                facebookId: id,
                fullname: name,
                picture: picture.data.url,
                email: email,
              });
              newUser.save().then((user) => {
                user.generateAuthToken().then((token) => {
                  res.cookie(`auth`, token, {
                    // maxAge: 5000,
                    // // expires works the same as the maxAge
                    // expires: new Date("01 12 2021"),
                    secure: true,
                    httpOnly: true,
                    sameSite: "lax",
                  });
                  res.send({ user });
                });
              });
            }
          }
        });
      });
  },
  //[GET] /user/:userId
  getProfile: (req, res, next) => {
    User.findById(req.user._id).then((user) => {
      res.status(200).send(user);
    });
  },
  //[POST] /user
  register: (req, res, next) => {
    const user = new User(req.body);
    console.log("res");
    user.save().then(() => {
      res.status(200).send({ msg: "Create success user!" });
    });
  },
  login: (req, res, next) => {
    const { email, password } = req.body.params;
    User.findOne({ email: email }).then((user) => {
      user.comparePassword(password, (match) => {
        if (!match) {
          res.send({ msg: "Invalid password" }); 
          return;
        }
        user.generateAuthToken().then((token) => {
          res.cookie("auth", token, {expire: 400000 + Date.now(), httpOnly: true }); 
          res.send({ user });
        });
      });
    });
  },
  logout: (req, res, next) => {
    // res.clearCookie("auth");
    User.deleteToken(req.user.token, (err, user) => {
      console.log("deleteToken:", user);
      res.send({ msg: "Log out!" });
    });
  },
};
