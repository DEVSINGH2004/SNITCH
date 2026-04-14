import express from 'express';
import {config} from '../config/config.js';
import productRouter from '../routes/product.route.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import  { Strategy as GoogleStrategy }  from 'passport-google-oauth20';
import cors from 'cors';
import authRouter from '../routes/auth.route.js';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(cookieParser());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    methods: ['GET, POST, PUT, DELETE, OPTIONS'],
    credentials: true,
  }
));
passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}))
app.get('/', (req, res) => {
  res.json({ message: "server is running on port 3000" });
});
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);

export default app;
