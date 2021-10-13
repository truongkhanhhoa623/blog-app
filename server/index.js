const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const router = express.Router();
const { connect } = require("./config/db");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const authFacebook = require("./config/authFacebook");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URL || "mongodb://localhost:27017/medium";

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

//Pare body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set Session
app.use(
  session({
    secret: "secretkey",
    resave: true,
    saveUninitialized: true,
  })
);

//config passport
app.use(passport.initialize());
app.use(passport.session());

//Authw with facebook [Passport]
// authFacebook();

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  return done(null, id);
});

//connect to mongodb server
connect(url);

//Set router
routes(router);
app.use("/api", router);

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
