export default function updateById(authorDTO) {
    const {
        id,
        name,
        country,
        birthDate,
        authorRepository
    } = authorDTO;

    if (!id || !name || !country || !birthDate || !authorRepository) {
        throw new Error(`Some fields are empty or not found!`);
    }

    const updatedAuthor = { name, country, birthDate };

    return authorRepository.findById(id).then((foundAuthor) => {
        if (!foundAuthor) {
            throw new Error(`No author found with id: ${id}`);
        }
        return authorRepository.updateById(id, updatedAuthor);
    });
}
