export default function create(bookDTO) {
    const {
        title,
        authorId,
        price,
        ISBN,
        language,
        numberOfPages,
        publisher,
        bookRepository
    } = bookDTO;
    if (!title || !authorId || !price || !ISBN || !language || !numberOfPages || !publisher || !bookRepository) {
        throw new Error(`Some fields are empty or not found!`);
    }

    const newBook = { title, authorId, price, ISBN, language, numberOfPages, publisher };

    return bookRepository.create(newBook);
}
