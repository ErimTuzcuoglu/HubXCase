import authorRouter from './author';
import bookRouter from './book';

export default function routes(app) {
  app.use('/api/books', bookRouter());
  app.use('/api/authors', authorRouter());
}
