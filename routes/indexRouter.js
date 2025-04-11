const { Router } = require('express');
const indexRouter = Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Ralph',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Kim',
		added: new Date(),
	},
  {
		text: 'The light',
		user: 'Dickens',
		added: new Date(),
	}
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
});

indexRouter.get('/details/:id', (req, res) => {
	res.render('details', { messages: messages, id: req.params.id })
});

indexRouter.post("/new", (req, res) => {
  messages.push({  
		text: req.body.message,
		user: req.body.author,
		added: new Date(),
	});
  res.redirect("/");
});

// indexRouter.get("/:index", (req, res) => {
//   const { index } = req.params;
//   res.send(`Index: ${index}`);
// });

module.exports = indexRouter;
