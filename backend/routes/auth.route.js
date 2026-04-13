import {Router} from 'express';
import passport from 'passport';
import {validateRegisterUser, validateLoginUser} from '../validators/auth.validator.js';
import {registerUser, loginUser, googleCallback} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', validateRegisterUser, registerUser);
authRouter.post('/login', validateLoginUser, loginUser);
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// Callback route that Google will redirect to after authentication
authRouter.get('/google/callback',
  passport.authenticate('google', { session: false }),
  googleCallback
);


export default authRouter;
