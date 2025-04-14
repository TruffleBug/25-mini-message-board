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
const detailsRouter = require('./routes/detailsRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/new', newMsgRouter);
app.use('/details', detailsRouter);
app.use('/', indexRouter);

app.get('/*param', (req, res) => {
	throw new CustomNotFoundError('404 - Not found.');
});

// ERROR MIDDLEWARE FUNCTION - HANDLES ALL ERRORS IN APP THAT COMES DOWN FROM OTHER MIDDLEWARE FUNCTIONS
// Every thrown error in app or prev middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.statusCode || 500).send(err.message);
});

// LOCALHOST PORT TO DISPLAY APP
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Mini Message Board - listening on port ${PORT}.`);
});