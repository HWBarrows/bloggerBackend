import express from 'express';
import Article from '../models/Article';

const articleRouter = express.Router();

articleRouter
  .get('/', async (req, res) => {
    const articles = await Article.find(req.query);
    res.send(articles);
  })

  .get('/:id', async (req, res, next) => {
    try {
      const currentArticle = await Article.findById(req.params.id);
      if (!currentArticle) {
        return next({ status: 404, message: 'Article not found' });
      } else {
        res.send(currentArticle);
      }
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newArticle = await Article.create(req.body);
      if (!newArticle) {
        return next({ status: 404, message: 'Invalid input' });
      }
      return res.send({ newArticle });
    } catch (error) {
      next({
        status: 400,
        error: 'Unable to complete operation, please try again'
      });
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const options = { new: true, runValidators: true };
      const id = req.params.id;
      const editedArticle = await Article.findByIdAndUpdate(
        id,
        req.body,
        options
      );
      if (!editedArticle) {
        return next({ status: 404, message: 'Article not found' });
      }
      res.send(editedArticle);
    } catch (error) {
      next({
        status: 400,
        error: 'Unable to complete operation, please try again'
      });
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const deletedArticle = await Article.findById(req.params.id);
      if (!deletedArticle) {
        return next({ status: 404, message: 'Article not found' });
      }
      deletedArticle.remove();
      res.send({ ok: true });
    } catch (err) {
      next({
        status: 400,
        error: 'Unable to complete operation, please try again'
      });
    }
  });

export default articleRouter;
