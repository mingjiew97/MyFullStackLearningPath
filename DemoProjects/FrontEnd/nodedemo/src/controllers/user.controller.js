import User from '../models/user.model';

export function getUsers(req, res, next) {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.json(users);
  });
}

export function postUser(req, res, next) {
  const user = new User(req.body);
  user.save((err) => {
    if (err) return next('Save failed.');
    res.json({
      success: true
    });
  });
}