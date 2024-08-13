import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import dotenv from 'dotenv'
import User from '../models/User.js'


dotenv.config()

passport.serializeUser((user , done) =>{
    done(null , user.id)
} ) 

passport.deserializeUser((id , done) => {
  User.findById(id).then((user) => {
    done(null , user)
  })
})

console.log("google client id : " , process.env.googleClientID)

passport.use(new GoogleStrategy({
    clientID : process.env.googleClientID,
    clientSecret : process.env.googleClientSecret,
    callbackURL : '/auth/google/callback'
} ,  (accessToken , refreshToken , profile , done) => {
    User.findOne({googleId : profile.id}).then((existingUser) => {
   if(existingUser){
    // we already have a record with given profile Id 
    done(null , existingUser)
   }else{
    // we don't have a user record with this Id , make a new record
    new User ({
        googleId: profile.id
    }).save().then(user => done(null , user))
   }
    }) 
 

}) 
);
