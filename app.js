const express = require('express');
const app = express();
const path = require('node:path');

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

// app.get('/msgDetails', (req, res) => {
// 	res.render('msgDetails', { test: 'this is a test' })
// });

// ROUTE - can be app.get, .post, .put, .delete, etc...
// can be res.send, .json, .redirect, .render, .status, etc...
// app.get('/', (req, res) => {
// 	res.render('index', { message: 'EJS rocks!' });
// });

// ROUTE PARAMETERS & QUERY PARAMETERS EXAMPLE:
// [[
// app.get("/:username/messages", (req, res) => {
//  console.log("Params:", req.params);
//  console.log("Query:", req.query);
//  res.end();
// });

// GET /odin/messages?sort=date&sort=likes&direction=ascending WILL LOG
// Params: { username: "odin" }
// Query: { sort: ["date", "likes"], direction: "ascending" }
// ]]

// FOR USE WITH NAVBAR TEMPLATE
// const links = [
// 	{ href: '/', text: 'Home' },
// 	{ href: 'about', text: 'About' },
// ];

// const users = ["Rose", "Cake", "Biff"];

// app.get("/", (req, res) => {
//     res.render("index", { links: links, users: users });
// });

// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.get("/new", (req, res) => {
//     res.render("newMsg");
// });

// app.get("/about", (req, res) => {
//     res.render("about", { links: links, name: 'Lisa', year: 2025 });
// });

// ERROR MIDDLEWARE FUNCTION - HANDLES ALL ERRORS IN APP THAT COMES DOWN FROM OTHER MIDDLEWARE FUNCTIONS
// Every thrown error in app or prev middleware function calling `next` with an error as an argument will eventually go to this middleware function
// app.use((err, req, res, next) => {
// 	console.error(err);
// 	// Can only send error code 500
// 	// res.status(500).send(err);

// 	// Can specify `err.statusCode` that exists in our custom error class. If it doesn't exist it's probably an internal server error
// 	res.status(err.statusCode || 500).send(err.message);
// });

// LOCALHOST PORT TO DISPLAY APP
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Mini Message Board - listening on port ${PORT}.`);
});