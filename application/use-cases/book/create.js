export default function create(bookDTO) {
    const {
        title,
        author,
        price,
        ISBN,
        language,
        numberOfPages,
        publisher,
        bookRepository
    } = bookDTO;
    if (!title || !author || !price || !ISBN || !language || !numberOfPages || !publisher || !bookRepository) {
        throw new Error(`Some fields are empty or not found!`);
    }

    const newBook = { title, author, price, ISBN, language, numberOfPages, publisher };

    return bookRepository.create(newBook);
}
