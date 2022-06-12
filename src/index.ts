import express from 'express';
import dotenv from 'dotenv';
import connect from './lib/database.js';
import userRouter from './controllers/userRouter'

dotenv.config();
connect();
const app = express();
app.use(express.json());
app.use("/user", userRouter)

const PORT = process.env.PORT;
app.get('/', (req, res) => res.send('Hi Everybody!'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
