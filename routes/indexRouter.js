const { Router } = require('express');
const indexRouter = Router();
const CustomNotFoundError = require('../errors/CustomNotFoundError');

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
	if(req.params.id >= messages.length) {
		throw new CustomNotFoundError('Message not found');
	};
	res.render('details', { messages: messages, id: req.params.id });
});

indexRouter.post("/new", (req, res) => {
  messages.push({  
		text: req.body.message,
		user: req.body.author,
		added: new Date(),
	});
  res.redirect("/");
});

// indexRouter.get("/*", (req, res) => {
// 	throw new CustomNotFoundError('404 - Not found.')
// })

module.exports = indexRouter;