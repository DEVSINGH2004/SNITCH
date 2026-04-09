import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.json({ message: "server is running on port 3000" });
});

export default app;
