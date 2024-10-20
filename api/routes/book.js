import express from 'express';

import bookController from '../controllers/bookController';
import bookRepository from '../../application/repositories/bookRepository';
import bookModelRepository from '../../loaders/database/mongoDB/repositories/bookModelRepository';

export default function bookRouter() {
  const router = express.Router();

  const controller = bookController(
    bookRepository,
    bookModelRepository,
  );

  router
    .route('/')
    .get(
      controller.fetchAllBooks
    );
  router
    .route('/:id')
    .get(
      controller.fetchBookById
    );
  router.route('/').post(controller.addNewBook);
  router.route('/:id').put(controller.updateBookById);
  router.route('/:id').delete(controller.deleteBookById);

  return router;
}
