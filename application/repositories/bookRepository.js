export default function bookRepository(repository) {
    const getAll = () => repository.getAll();
    const findById = (id) => repository.findById(id);
    const create = (book) => repository.create(book);
    const updateById = (id, book) => repository.updateById(id, book);
    const deleteById = (id) => repository.deleteById(id);
  
    return {
      getAll,
      findById,
      create,
      updateById,
      deleteById
    };
  }
  