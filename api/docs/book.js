/**
 * @swagger
 * /api/books:
 *   get:
 *     tags:
 *       - Books
 *     summary: Get all books
 *     description: Retrieve a list of all books.
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                     example: The Great Gatsby
 *                   author:
 *                     type: string
 *                     example: F. Scott Fitzgerald
 *                   price:
 *                     type: number
 *                     format: float
 *                     example: 10.99
 *                   ISBN:
 *                     type: string
 *                     example: 9780141182636
 *                   language:
 *                     type: string
 *                     example: English
 *                   numberOfPages:
 *                     type: integer
 *                     example: 180
 *                   publisher:
 *                     type: string
 *                     example: Penguin Classics
 */

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     tags:
 *       - Books
 *     summary: Get a book by ID
 *     description: Retrieve a specific book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID
 *     responses:
 *       200:
 *         description: A single book
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: The Great Gatsby
 *                 author:
 *                   type: string
 *                   example: F. Scott Fitzgerald
 *                 price:
 *                   type: number
 *                   format: float
 *                   example: 10.99
 *                 ISBN:
 *                   type: string
 *                   example: 9780141182636
 *                 language:
 *                   type: string
 *                   example: English
 *                 numberOfPages:
 *                   type: integer
 *                   example: 180
 *                 publisher:
 *                   type: string
 *                   example: Penguin Classics
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     tags:
 *       - Books
 *     summary: Create a new book
 *     description: Add a new book to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: The Great Gatsby
 *               authorId:
 *                 type: string
 *                 example: 6714162d4bffc4645a051d3a
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 10.99
 *               ISBN:
 *                 type: string
 *                 example: 9780141182636
 *               language:
 *                 type: string
 *                 example: English
 *               numberOfPages:
 *                 type: integer
 *                 example: 180
 *               publisher:
 *                 type: string
 *                 example: Penguin Classics
 *     responses:
 *       201:
 *         description: Book created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book created successfully
 *                 book:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: The Great Gatsby
 *                     author:
 *                       type: string
 *                       example: F. Scott Fitzgerald
 *                     price:
 *                       type: number
 *                       format: float
 *                       example: 10.99
 *                     ISBN:
 *                       type: string
 *                       example: 9780141182636
 *                     language:
 *                       type: string
 *                       example: English
 *                     numberOfPages:
 *                       type: integer
 *                       example: 180
 *                     publisher:
 *                       type: string
 *                       example: Penguin Classics
 */

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     tags:
 *       - Books
 *     summary: Update an existing book
 *     description: Update the details of a book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: The Great Gatsby
 *               authorId:
 *                 type: string
 *                 example: 6714162d4bffc4645a051d3a
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 10.99
 *               ISBN:
 *                 type: string
 *                 example: 9780141182636
 *               language:
 *                 type: string
 *                 example: English
 *               numberOfPages:
 *                 type: integer
 *                 example: 180
 *               publisher:
 *                 type: string
 *                 example: Penguin Classics
 *     responses:
 *       200:
 *         description: Book updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book updated successfully
 *                 book:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: The Great Gatsby
 *                     author:
 *                       type: string
 *                       example: F. Scott Fitzgerald
 *                     price:
 *                       type: number
 *                       format: float
 *                       example: 10.99
 *                     ISBN:
 *                       type: string
 *                       example: 9780141182636
 *                     language:
 *                       type: string
 *                       example: English
 *                     numberOfPages:
 *                       type: integer
 *                       example: 180
 *                     publisher:
 *                       type: string
 *                       example: Penguin Classics
 */

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     tags:
 *       - Books
 *     summary: Delete a book by ID
 *     description: Remove a book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The book ID
 *     responses:
 *       200:
 *         description: Book deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Book deleted successfully
 */
