const db = require("../database");
const asyncHandler = require('express-async-handler');
const CustomNotFoundError = require("../errors/CustomNotFoundError");

// asyncHandler automatically catches any errors thrown and calls next function
const getAuthorById = asyncHandler(async (req, res) => {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    // Sends custom error
    if (!author) {
        throw new CustomNotFoundError("Author not found");
    };

    // Sends 404 error
    // if (!author) {
    //     res.status(404).send("Author not found");
    //     return;
    // };

    res.send(`Author Name: ${author.name}`);
});

module.exports = { getAuthorById };