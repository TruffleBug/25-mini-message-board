const { Router } = require("express");
const indexRouter = Router();

// indexRouter.get("/", (req, res) => res.send("All indices"));

indexRouter.get("/:index", (req, res) => {
  const { index } = req.params;
  res.send(`Index: ${index}`);
});

module.exports = indexRouter;