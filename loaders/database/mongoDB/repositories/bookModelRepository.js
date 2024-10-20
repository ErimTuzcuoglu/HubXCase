import mongoose from 'mongoose';
import { Author } from '../models/author.js';
import { Book } from '../models/book.js';

export default function bookModelRepository() {
    //TODO: Object will be mapped to DTOs
    const getAll = () => Book.find().select('-__v');
    //TODO: Object will be mapped to DTOs
    const findById = (id) => Book.findById(id).select('-__v');

    const create = async ({
        title,
        authorId,
        price,
        ISBN,
        language,
        numberOfPages,
        publisher
    }) => {
        if (!mongoose.Types.ObjectId.isValid(authorId) || !(await Author.findById(authorId))) throw new Error('Author does not exist!');
        if (await Book.findOne({ ISBN })) throw new Error('ISBN is already exists!');

        const newBook = new Book({
            title,
            author: authorId,
            price,
            ISBN,
            language,
            numberOfPages,
            publisher
        });
        //TODO: Object will be mapped to DTOs
        return newBook.save();
    };

    const updateById = async (id, { title, authorId, price, ISBN, language, numberOfPages, publisher }) => {
        if (!mongoose.Types.ObjectId.isValid(authorId) || !(await Author.findById(authorId))) throw new Error('Author does not exist!');
        const bookWithSameISBN = await Book.findOne({ ISBN });
        if (bookWithSameISBN && bookWithSameISBN.id !== id) throw new Error('ISBN is already exists!');

        //TODO: Object will be mapped to DTOs
        return Book.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    title,
                    author: authorId,
                    price,
                    ISBN,
                    language,
                    numberOfPages,
                    publisher,
                }
            },
            { new: true }
        );
    };

    //TODO: Soft Delete
    const deleteById = (id) => Book.findByIdAndDelete(id);

    return {
        getAll,
        findById,
        create,
        updateById,
        deleteById
    };
}
