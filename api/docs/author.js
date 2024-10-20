/**
 * @swagger
 * /api/authors:
 *   get:
 *     tags:
 *       - Author
 *     summary: Retrieve a list of authors
 *     description: Get a list of all authors from the database.
 *     responses:
 *       200:
 *         description: A list of authors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The author ID.
 *                     example: 5f8f8c44b54764421b7156c9
 *                   name:
 *                     type: string
 *                     description: The author's name.
 *                     example: John Doe
 *                   country:
 *                     type: string
 *                     description: The author's country.
 *                     example: USA
 *                   birthDate:
 *                     type: string
 *                     format: date
 *                     description: The author's birth date.
 *                     example: 1990-01-01
 */

/**
 * @swagger
 * /api/authors/{id}:
 *   get:
 *     tags:
 *       - Author
 *     summary: Retrieve a specific author by ID
 *     description: Get the details of a specific author by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The author's ID.
 *         schema:
 *           type: string
 *           example: 5f8f8c44b54764421b7156c9
 *     responses:
 *       200:
 *         description: The details of the author.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The author ID.
 *                   example: 5f8f8c44b54764421b7156c9
 *                 name:
 *                   type: string
 *                   description: The author's name.
 *                   example: John Doe
 *                 country:
 *                   type: string
 *                   description: The author's country.
 *                   example: USA
 *                 birthDate:
 *                   type: string
 *                   format: date
 *                   description: The author's birth date.
 *                   example: 1990-01-01
 *       404:
 *         description: Author not found
 */

/**
 * @swagger
 * /api/authors:
 *   post:
 *     tags:
 *       - Author
 *     summary: Create a new author
 *     description: Create a new author with name, country, and birthDate.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The author's name
 *                 example: John Doe
 *               country:
 *                 type: string
 *                 description: The author's country
 *                 example: USA
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: The author's birth date
 *                 example: 1990-01-01
 *     responses:
 *       201:
 *         description: Author successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The author ID.
 *                   example: 5f8f8c44b54764421b7156c9
 *                 name:
 *                   type: string
 *                   description: The author's name.
 *                   example: John Doe
 *                 country:
 *                   type: string
 *                   description: The author's country.
 *                   example: USA
 *                 birthDate:
 *                   type: string
 *                   format: date
 *                   description: The author's birth date.
 *                   example: 1990-01-01
 */

/**
 * @swagger
 * /api/authors/{id}:
 *   put:
 *     tags:
 *       - Author
 *     summary: Update an author
 *     description: Update an author's details by providing their ID, along with name, country, and birthDate.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The author's ID.
 *         schema:
 *           type: string
 *           example: 5f8f8c44b54764421b7156c9
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The author's name
 *                 example: John Doe
 *               country:
 *                 type: string
 *                 description: The author's country
 *                 example: USA
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 description: The author's birth date
 *                 example: 1990-01-01
 *     responses:
 *       200:
 *         description: Author successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The author ID.
 *                   example: 5f8f8c44b54764421b7156c9
 *                 name:
 *                   type: string
 *                   description: The author's name.
 *                   example: John Doe
 *                 country:
 *                   type: string
 *                   description: The author's country.
 *                   example: USA
 *                 birthDate:
 *                   type: string
 *                   format: date
 *                   description: The author's birth date.
 *                   example: 1990-01-01
 */

/**
 * @swagger
 * /api/authors/{id}:
 *   delete:
 *     tags:
 *       - Author
 *     summary: Delete an author
 *     description: Delete an author by providing their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The author's ID.
 *         schema:
 *           type: string
 *           example: 5f8f8c44b54764421b7156c9
 *     responses:
 *       200:
 *         description: Author successfully deleted
 *       404:
 *         description: Author not found
 */

module.exports = {};