import authorRouter from './author.js';
import bookRouter from './book.js';

export default function routes(app) {
  app.use('/api/books', bookRouter());
  app.use('/api/authors', authorRouter());
}
