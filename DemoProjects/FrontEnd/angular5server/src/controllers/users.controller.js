import User from '../models/users.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export function postLogin(req, res, next) {
  const {email, password} = req.body;
  User.findOne({email}, (err, user) => {
    if (err) return next(err);
    if (!user) return next('email does not exist.');
    if (user.password === undefined) return next('try third party login.');
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        res.json({
          success: true,
          user
        });
      } else {
        return next('password is not correct.')
      }
    });
  });
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

export function postSocialLogin(req, res, next) {
  const socialUser = req.user;
  User.findOne({email: socialUser.email}, (err, user) => {
    if (err) return next(err);
    const token = jwt.sign({
        id: socialUser.id
      }, 'msi',
      {
        expiresIn: 60 * 120
      });
    if (!user) { //register
      const user = new User({
        name: socialUser.name,
        email: socialUser.email,
        providers: [{
          name: socialUser.provider,
          id: socialUser.id
        }]
      });
      user.save((err) => {
        if (err) return next(err);
        res.json({
          success: true,
          user: {
            name: user.name,
            email: user.email
          },
          token
        });
      });
    } else {
      const providers = user.providers;
      const provider = providers.find(p => p.name === socialUser.provider);
      if (provider) { // existing provider, verify id.
        if (provider.id === socialUser.id) {
          res.json({
            success: true,
            user: {
              name: user.name,
              email: user.email
            },
            token
          });
        }else {
          return next('your information is not correct.');
        }
      }else{ // no provider for current existing user. add it.
        let newProviders = user.providers.concat({
          name: socialUser.provider,
          id: socialUser.id
        });
        User.update({email: socialUser.email}, {providers: newProviders}, (err, user) => {
          if (err) return next(err);
          res.json({
            success: true,
            user: {
              name: user.name,
              email: user.email
            },
            token
          });
        });
      }
    }
  });
}