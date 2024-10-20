export default function deleteById(id, bookRepository) {
    return bookRepository.findById(id).then((book) => {
      if (!book) {
        throw new Error(`No book found with id: ${id}`);
      }
      return bookRepository.deleteById(id);
    });
  }
  