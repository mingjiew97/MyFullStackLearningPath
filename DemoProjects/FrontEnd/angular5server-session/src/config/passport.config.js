import passport from 'passport';
import {Strategy} from 'passport-local';
import User from '../models/users.model';
import bcrypt from "bcrypt";

passport.use(new Strategy(
  (username, password, done) => {
    User.findOne({username}, (err, user) => {
      if(err) {
        return done(err);
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          return done(null, user);
        } else {
          return done("Bad Credentials.", false);
        }
      });
    });
  }
));

// serialize user object
passport.serializeUser(function (user, done) {
  done(null, user.username);
});

// deserialize user object
passport.deserializeUser(function (username, done) {
  User.findOne({username}, (err, u) => {
    done(err, u);
  });
});