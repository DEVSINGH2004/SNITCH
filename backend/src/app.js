import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from '../routes/auth.route.js';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    methods: ['GET, POST, PUT, DELETE, OPTIONS'],
    credentials: true,
  }
));
app.get('/', (req, res) => {
  res.json({ message: "server is running on port 3000" });
});
app.use('/api/auth', authRouter);


export default app;
