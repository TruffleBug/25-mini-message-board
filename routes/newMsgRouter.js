const { Router } = require("express");
// const { getAuthorById } = require('../controllers/authorController');
const newMsgRouter = Router();

// newMsgRouter.get("/", (req, res) => res.send("New Message Form Placeholder"));

// newMsgRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

// newMsgRouter.get("/:authorId", getAuthorById);

newMsgRouter.get("/", (req, res) => {
    res.render("form")
});  

module.exports = newMsgRouter;