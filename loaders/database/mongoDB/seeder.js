import { Author } from "./models/author.js";
import { Book } from "./models/book.js";

export default async function seedDatabase() {
    try {
        const authorCount = await Author.countDocuments();
        const bookCount = await Book.countDocuments();
        if (authorCount < 1 && bookCount < 1) {
            const authors = await Author.insertMany([
                { name: 'George Orwell', country: 'United Kingdom', birthDate: new Date('1903-06-25') },
                { name: 'Haruki Murakami', country: 'Japan', birthDate: new Date('1949-01-12') },
                { name: 'J.K. Rowling', country: 'United Kingdom', birthDate: new Date('1965-07-31') }
            ]);

            const books = [
                { title: '1984', author: authors[0]._id, price: 9.99, ISBN: '9780451524935', language: 'English', numberOfPages: 328, publisher: 'Harcourt' },
                { title: 'Norwegian Wood', author: authors[1]._id, price: 12.99, ISBN: '9780375704024', language: 'English', numberOfPages: 296, publisher: 'Vintage International' },
                { title: 'Harry Potter and the Sorcerer\'s Stone', author: authors[2]._id, price: 10.99, ISBN: '9780590353427', language: 'English', numberOfPages: 309, publisher: 'Scholastic' }
            ];

            await Book.insertMany(books);
        }
        console.log('Seed Completed!');
    } catch (error) {
        console.log('Error While Seeding DB: ', error);
    }
}
