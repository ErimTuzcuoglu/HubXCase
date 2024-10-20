export default function deleteById(id, authorRepository) {
    return authorRepository.findById(id).then((author) => {
      if (!author) {
        throw new Error(`No author found with id: ${id}`);
      }
      return authorRepository.deleteById(id);
    });
  }
  