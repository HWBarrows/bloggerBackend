import express from 'express';
import User from '../models/User';

const userRouter = express.Router();

userRouter
  .get('/', (req, res) => {
    res.send('Hi user');
  })

  .post('/register', async (req, res, next) => {
    try {
      const newUser = await User.create(req.body);
      if (!newUser) {
        return next({ status: 404, message: 'Invalid input' });
      }
      return res.send(newUser);
    } catch (error) {
      next({
        status: 400,
        error: 'Unable to complete operation, please try again',
      });
    }
  })

  .post('/login', async (req, res, next) => {
    try {
      const currentUser = await User.findOne(req.body);
      if (!currentUser) {
        return next({ status: 404, message: 'User not found' });
      }
      return res.send(currentUser);
    } catch (error) {
      next({
        status: 400,
        error: 'Unable to complete operation, please try again',
      });
    }
  });
export default userRouter;
