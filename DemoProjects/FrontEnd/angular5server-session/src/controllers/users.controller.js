import User from '../models/users.model';
import bcrypt from 'bcrypt';
import passport from 'passport';

export function postLogin(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        success: false,
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.json({
        success: true
      });
    });
  })(req, res, next);
}

export function postRegister(req, res, next) {
  const user = new User(req.body);
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    user.save((err) => {
      if (err) return next('Register failed.');
      res.json({
        success: true
      });
    });
  });
}

export function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.json({
    success: false,
    err: 'Please login first!'
  });
}

export function postLogout(req, res, next) {
  req.logout();
  res.json({
    success: true
  });
}