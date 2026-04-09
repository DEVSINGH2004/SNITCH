import app from './src/app.js';
import connectDatabase from './config/database.js';

connectDatabase();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
