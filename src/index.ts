import express from 'express';
import dotenv from 'dotenv';
import connect from './lib/database.js';
import articleRouter from './controllers/articleRouter'
import globalErrorHandler from './middlewares/globalErrorHandler'
import validator from './middlewares/validator'
import cors from 'cors'

dotenv.config();
connect();
const app = express();
app.use(express.json());
app.use(cors())
app.use('/articles', validator, articleRouter)
app.use(globalErrorHandler)



const PORT = process.env.PORT;
app.get('/', (req, res) => res.send('Hi Everybody!'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
