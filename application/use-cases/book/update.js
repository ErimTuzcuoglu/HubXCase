export default function updateById(bookDTO) {
    const {
        id,
        title,
        authorId,
        price,
        ISBN,
        language,
        numberOfPages,
        publisher,
        bookRepository
    } = bookDTO;

    if (!id || !title || !authorId || !price || !ISBN || !language || !numberOfPages || !publisher || !bookRepository) {
        throw new Error(`Some fields are empty or not found!`);
    }

    const updatedBook = { title, authorId, price, ISBN, language, numberOfPages, publisher };

    return bookRepository.findById(id).then((foundBook) => {
        if (!foundBook) {
            throw new Error(`No book found with id: ${id}`);
        }
        return bookRepository.updateById(id, updatedBook);
    });
}
