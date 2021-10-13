const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../../app/models/User")

module.exports = function(){
    passport.use(
        new FacebookStrategy(
          {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3000/api/auth/facebook/callback",
            profileFields: ["id", "displayName", "email", "photos"],
          },
          function (accessToken, refreshToken, profile, cb) {
            const picture = `https://graph.facebook.com/${profile.id}/picture?width=200&height=200&access_token=${accessToken}`;
            console.log("photo", profile);
            User.findOne({ facebookId: profile.id }, (err, user) => {
              if (user) {
                return cb(err, user);
              }
              User.create(
                {
                  facebookId: profile.id,
                  email: profile.emails[0].value,
                  fullname: profile.displayName,
                  photo: profile.photos[0].value,
                },
                function (err, user) {
                  return cb(err, user);
                }
              );
            });
          }
        )
      );
}