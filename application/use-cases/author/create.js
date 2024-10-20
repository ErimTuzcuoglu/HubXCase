export default function create(authorDTO) {
    const {
        name,
        country,
        birthDate,
        authorRepository
    } = authorDTO;
    if (!name || !country || !birthDate || !authorRepository) {
        throw new Error(`Some fields are empty or not found!`);
    }

    const newAuthor = { name, country, birthDate };

    return authorRepository.create(newAuthor);
}
