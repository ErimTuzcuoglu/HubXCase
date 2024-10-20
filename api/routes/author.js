import express from 'express';

import authorController from '../controllers/authorController';
import authorDbRepository from '../../application/repositories/authorRepository';
import authorDbRepositoryMongoDB from '../../loaders/database/mongoDB/repositories/authorModelRepository';

export default function authorRouter() {
  const router = express.Router();

  const controller = authorController(
    authorDbRepository,
    authorDbRepositoryMongoDB,
  );

  router
    .route('/')
    .get(
      controller.fetchAllAuthors
    );
  router
    .route('/:id')
    .get(
      controller.fetchAuthorById
    );
  router.route('/').post(controller.addNewAuthor);
  router.route('/:id').put(controller.updateAuthorById);
  router.route('/:id').delete(controller.deleteAuthorById);

  return router;
}
