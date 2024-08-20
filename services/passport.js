import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log(id)
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientID_prod,
      clientSecret: process.env.googleClientSecret_prod,
      callbackURL: "/auth/google/callback",
      proxy : true 
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
  
      if (existingUser) {
        done(null, existingUser);
      }
   const user = await new User({
          googleId: profile.id,
        }).save()
        done(null , user)
          
      }
    
  )
);
