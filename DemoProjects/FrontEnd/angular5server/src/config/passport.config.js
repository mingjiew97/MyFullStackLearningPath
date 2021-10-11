import passport from 'passport';
import FacebookTokenStrategy from 'passport-facebook-token';
import { Strategy as GoogleTokenStrategy } from 'passport-google-token';

passport.use(
  new FacebookTokenStrategy({
      clientID: process.env.CLIENT_ID || "571123523279490",
      clientSecret: process.env.CLIENT_SECRET || "5c0f5883f46e9dcc579e393c0ad8abc8",
    }, (accessToken, refreshToken, profile, cb) => {
    cb(null, Object.assign(profile._json, {provider: 'FACEBOOK'}));
    }
  )
);

passport.use(
  new GoogleTokenStrategy({
      clientID: process.env.CLIENT_ID || "709146169588-cr3q9ncbsjf486l76pqgqgjqdheduv47.apps.googleusercontent.com",
      clientSecret: process.env.CLIENT_SECRET || "Jh7G8zGNOPn5urrqrCB06W71",
    }, (accessToken, refreshToken, profile, cb) => {
      cb(null, Object.assign(profile._json, {provider: 'GOOGLE'}));
    }
  )
);