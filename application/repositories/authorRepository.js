export default function authorRepository(repository) {
  const getAll = () => repository.getAll();
  const findById = (id) => repository.findById(id);
  const create = (author) => repository.create(author);
  const updateById = (id, author) => repository.updateById(id, author);
  const deleteById = (id) => repository.deleteById(id);

  return {
    getAll,
    findById,
    create,
    updateById,
    deleteById
  };
}
