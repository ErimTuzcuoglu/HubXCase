import { Author } from '../models/author';
import { Book } from '../models/book';

export default function authorModelRepository() {
    //TODO: Object will be mapped to DTOs
    const getAll = () => Author.find();
    //TODO: Object will be mapped to DTOs
    const findById = (id) => Author.findById(id);

    const create = ({
        name,
        country,
        birthDate
    }) => {
        const newAuthor = new Author({
            name,
            country,
            birthDate
        });
        //TODO: Object will be mapped to DTOs
        return newAuthor.save();
    };

    const updateById = (id, { name, country, birthDate }) => {
        return Author.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name,
                    country,
                    birthDate
                }
            },
            { new: true }
        );
    };

    //TODO: Soft Delete
    const deleteById = async (id) => {
        if ((await Book.find({ author: id })).length > 0) {
            throw new Error('The author cannot be deleted without deleting the books linked to this author');
        }
        //TODO: Object will be mapped to DTOs
        return Author.findByIdAndDelete(id);
    };

    return {
        getAll,
        findById,
        create,
        updateById,
        deleteById
    };
}
