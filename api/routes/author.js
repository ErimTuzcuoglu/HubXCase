import express from 'express';

import authorController from '../controllers/authorController.js';
import authorDbRepository from '../../application/repositories/authorRepository.js';
import authorDbRepositoryMongoDB from '../../loaders/database/mongoDB/repositories/authorModelRepository.js';

export default function authorRouter() {
  const router = express.Router();

  // load controller with dependencies
  const controller = authorController(
    authorDbRepository,
    authorDbRepositoryMongoDB,
  );

  // GET endpoints
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

  // AUTHOR endpoints
  router.route('/').post(controller.addNewAuthor);

  // PUT endpoints
  router.route('/:id').put(controller.updateAuthorById);

  // DELETE endpoints
  router.route('/:id').delete(controller.deleteAuthorById);

  return router;
}
