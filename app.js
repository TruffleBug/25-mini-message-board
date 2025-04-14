const express = require('express');
const app = express();
const path = require('node:path');
const CustomNotFoundError = require('./errors/CustomNotFoundError');

app.use(express.urlencoded({ extended: true }));

// FOR STATIC ASSETS (LIKE CSS)
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// ENABLES EJS AS VIEW ENGINE & SAYS APP SHOULD LOOK FOR TEMPLATES IN /VIEW SUBDIRECTORY
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ROUTERS
const newMsgRouter = require('./routes/newMsgRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/new', newMsgRouter);
app.use('/', indexRouter);

// app.get('/*param', (req, res) => {
// 	res.status(404).send('404 - Not found.');
// 	// throw new CustomNotFoundError('404 - Not found.');
// });

// ROUTE - can be app.get, .post, .put, .delete, etc...
// can be res.send, .json, .redirect, .render, .status, etc...
// app.get('/', (req, res) => {
// 	res.render('index', { message: 'EJS rocks!' });
// });

// ERROR MIDDLEWARE FUNCTION - HANDLES ALL ERRORS IN APP THAT COMES DOWN FROM OTHER MIDDLEWARE FUNCTIONS
// Every thrown error in app or prev middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
	console.error(err);
	// Can only send error code 500
	// res.status(500).send(err);

// 	// Can specify `err.statusCode` that exists in our custom error class. If it doesn't exist it's probably an internal server error
	res.status(err.statusCode || 500).send(err.message);
});

// LOCALHOST PORT TO DISPLAY APP
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Mini Message Board - listening on port ${PORT}.`);
});