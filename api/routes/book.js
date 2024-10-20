import express from 'express';

import bookController from '../controllers/bookController';
import bookRepository from '../../application/repositories/bookRepository';
import bookModelRepository from '../../loaders/database/mongoDB/repositories/bookModelRepository';

export default function bookRouter() {
  const router = express.Router();

  // load controller with dependencies
  const controller = bookController(
    bookRepository,
    bookModelRepository,
  );

  // GET endpoints
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

  // BOOK endpoints
  router.route('/').post(controller.addNewBook);

  // PUT endpoints
  router.route('/:id').put(controller.updateBookById);

  // DELETE endpoints
  router.route('/:id').delete(controller.deleteBookById);

  return router;
}
