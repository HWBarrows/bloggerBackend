import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface IArticle {
  heading: string;
  content: string;
  photoUrl: string;
  author: string;
  topic: string;
}

const articleSchema = new Schema(
  {
    heading:  { type: String, required: true, unique: true },
    content:  [{ type: String, required: true, unique: true }],
    photoUrl: { type: String, required: true },
    author:   { type: String, required: true },
    topic:    { type: String, required: true },
  },
  { timestamps: true }
);

const Article = model<IArticle>('article', articleSchema);

export default Article;
