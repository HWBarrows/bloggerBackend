import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface IUser {
  username: string;
  email: string;
}

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);


const User = model<IUser>('user', userSchema);

export default User;
