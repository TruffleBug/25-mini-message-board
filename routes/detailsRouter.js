const { Router } = require('express');
const detailsRouter = Router();
const db = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

detailsRouter.get('/:id', (req, res) => {
	if (!req.params.id || req.params.id >= db.messages.length) {
		throw new CustomNotFoundError('Message not found');
	}
	res.render('details', { messages: db.messages, id: req.params.id });
});

detailsRouter.get('/', (req, res) => {
	throw new CustomNotFoundError('Message not found');
});

module.exports = detailsRouter;
