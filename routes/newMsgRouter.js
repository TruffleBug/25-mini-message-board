const { Router } = require('express');
const newMsgRouter = Router();
const db = require('../db');

newMsgRouter
	.route('/')
	.get((req, res) => {
		res.render('form');
	})
	.post((req, res) => {
		db.messages.push({
			text: req.body.message,
			user: req.body.author,
			added: new Date(),
		});
		res.redirect('/');
	});

module.exports = newMsgRouter;