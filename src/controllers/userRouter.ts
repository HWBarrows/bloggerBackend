import express from 'express';
import User from '../models/User';

const userRouter = express.Router();

userRouter
  .get('/', (req, res) => {
    res.send('Hi user');
  })

  .post('/', async (req, res) => {
    const currentUser = await User.create(req.body);
    if (currentUser) {
      return res.send({ currentUser });
    }
    res.status(400).send({ error: 'Invalid Input' });
  });
export default userRouter;
