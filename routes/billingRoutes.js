import express from 'express'
import Stripe from 'stripe';
import 'dotenv/config'
import requireLogin from '../middlewares/requireLogin.js';

const router = express.Router()

console.log(process.env.stripeSecretKey)

const stripe = Stripe(process.env.stripeSecretKey);

router.post('/api/stripe' , requireLogin , async (req , res) => {
    // console.log(req.body)
    //the property of req.user is property of passport.js 

 const charge =  await  stripe.charges.create({
        amount : 500,
        currency : 'usd',
        description : '$5 for 5 credits',
        source : req.body.id
    })
    req.user.credits += 5 ;
     const user =  await  req.user.save() ;

      res.send(user)
})


export default router;