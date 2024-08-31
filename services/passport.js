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
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy : true 
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
       console.log(profile) ;
      if (existingUser) {
      return   done(null, existingUser);
      }
   const user = await new User({
          googleId: profile.id,
          userName : profile.displayName ,
          email : profile.emails[0].value ,
          photos : profile.photos[0].value
        }).save()
        done(null , user)
          
      }
    
  )
);
