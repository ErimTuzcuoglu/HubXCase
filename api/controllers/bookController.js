import createBook from '../../application/use-cases/book/create';
import findById from '../../application/use-cases/book/get';
import getAll from '../../application/use-cases/book/getAll';
import deleteById from '../../application/use-cases/book/delete';
import updateById from '../../application/use-cases/book/update';

export default function bookController(
    bookRepository,
    bookModelRepository,
) {
    const dbRepository = bookRepository(bookModelRepository());

    const fetchAllBooks = async (req, res, next) => {
        try {
            const books = await getAll(dbRepository)
            return res.apiResponse(books);
        } catch (error) {
            return next(error);
        }
    }

    const fetchBookById = async (req, res, next) => {
        try {
            const book = await findById(req.params.id, dbRepository)
            return res.apiResponse(book);
        } catch (error) {
            return next(error)
        }

    };

    const addNewBook = async (req, res, next) => {
        const { title, authorId, price, ISBN, language, numberOfPages, publisher } = req.body;

        try {
            const createdBook = await createBook({ title, authorId, price, ISBN, language, numberOfPages, publisher, bookRepository: dbRepository });
            res.status(201);
            return res.apiResponse(createdBook);
        } catch (error) {
            return next(error);
        }
    };

    const deleteBookById = async (req, res, next) => {
        try {
            await deleteById(req.params.id, dbRepository);
            return res.apiResponse('Book Deleted Succesfully');
        } catch (error) {
            return next(error);
        }

    };

    const updateBookById = async (req, res, next) => {
        const { title, authorId, price, ISBN, language, numberOfPages, publisher } = req.body;

        try {
            const updatedBook = await updateById({
                id: req.params.id,
                title,
                authorId,
                price,
                ISBN,
                language,
                numberOfPages,
                publisher,
                bookRepository: dbRepository
            })
            return res.apiResponse(updatedBook);
        } catch (error) {
            return next(error);
        }
    };

    return {
        fetchAllBooks,
        addNewBook,
        fetchBookById,
        updateBookById,
        deleteBookById
    };
}
