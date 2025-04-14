const { Router } = require('express');
const indexRouter = Router();
const db = require('../db');

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: db.messages })
});

module.exports = indexRouter;