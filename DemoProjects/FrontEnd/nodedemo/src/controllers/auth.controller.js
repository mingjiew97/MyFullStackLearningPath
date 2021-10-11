import User from "../models/user.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALTROUNDS = process.env.SALTROUNDS || 10;
const SECRET = process.env.SECRET || 'msi';

export function login(req, res, next) {
  const u = req.body;
  User.findOne({email: u.email}, (err, user) => {
    if (err) return next(err);
    bcrypt.compare(u.password, user.password, (err, match) => {
      if (match) { // login successfully
        const token = jwt.sign({
            name: user.name,
            email: user.email
          }, 'msi',
          {
            expiresIn: 60 * 60
          });
        res.json({
          success: true,
          token
        });
      } else {
        res.json({
          success: false
        });
      }
    });
  });
}

export function register(req, res, next) {
  const user = new User(req.body);
  bcrypt.genSalt(SALTROUNDS, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      user.save((err) => {
        if (err) return next(err);
        res.json({
          success: true
        });
      });
    });
  });
}