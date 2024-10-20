import createAuthor from '../../application/use-cases/author/create';
import findById from '../../application/use-cases/author/get';
import getAll from '../../application/use-cases/author/getAll';
import deleteById from '../../application/use-cases/author/delete';
import updateById from '../../application/use-cases/author/update';

export default function authorController(
    authorRepository,
    authorModelRepository,
) {
    const dbRepository = authorRepository(authorModelRepository());

    const fetchAllAuthors = async (req, res, next) => {
        try {
            const authors = await getAll(dbRepository)
            return res.apiResponse(authors);
        } catch (error) {
            return next(error);
        }
    }

    const fetchAuthorById = async (req, res, next) => {
        try {
            const author = await findById(req.params.id, dbRepository)
            return res.apiResponse(author);
        } catch (error) {
            return next(error)
        }

    };

    const addNewAuthor = async (req, res, next) => {
        const { name, country, birthDate } = req.body;

        try {
            const createdAuthor = await createAuthor({ name, country, birthDate, authorRepository: dbRepository });
            res.status(201);
            return res.apiResponse(createdAuthor);
        } catch (error) {
            return next(error);
        }
    };

    const deleteAuthorById = async (req, res, next) => {
        try {
            await deleteById(req.params.id, dbRepository);
            return res.apiResponse('Author Deleted Succesfully');
        } catch (error) {
            return next(error);
        }

    };

    const updateAuthorById = async (req, res, next) => {
        const { name, country, birthDate } = req.body;

        try {
            const updatedAuthor = await updateById({
                id: req.params.id,
                name,
                country,
                birthDate,
                authorRepository: dbRepository
            })
            return res.apiResponse(updatedAuthor);
        } catch (error) {
            return next(error);
        }
    };

    return {
        fetchAllAuthors,
        addNewAuthor,
        fetchAuthorById,
        updateAuthorById,
        deleteAuthorById
    };
}
