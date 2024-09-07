import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import billingRoutes from './routes/billingRoutes.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import './models/User.js'
import './services/passport.js'
import cookieSession from 'cookie-session'
import passport from 'passport'
import cors from 'cors'
import {createProxyMiddleware} from 'http-proxy-middleware'
// 
const app = express()

app.use(bodyParser.json())

app.use(
    cookieSession({
        maxAge : 30*24*60*60*1000,
        keys : [process.env.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(cors({origin : "http://localhost:5173/" , methods : "GET POST PUT DELETE" , credentials:true}))

dotenv.config()

// Routing 
app.use('/' , authRoutes)
app.use('/' , billingRoutes)

const PORT = process.env.PORT || 5000
app.listen(5000)
mongoose.connect(process.env.mongo_url_dev)