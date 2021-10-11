import { users } from '../models/users.model';

export function postLogin(req, res) {
  const {email, password} = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({
      success: true,
      user
    });
  } else{
    res.json({success: false});
  }
}

export function postRegister(req, res) {
  // add validation.
  const {email} = req.body;
  if (!users.find((u) => u.email === email && u.password === password)) {
    users.push(req.body);
    res.json({success: true});
  } else{
    res.json({success: false});
  }
}