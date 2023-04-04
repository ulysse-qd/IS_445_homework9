const express = require("express");
const multer = require("multer");
const JsonParser = require("body-parser").json();
const upload = multer();
// Access the exported service
const app = express();
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static("public"));
app.use(express.static("css"));
// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

app.get("/form", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/form", upload.array(), (request, response) => {
  const email = request.body.email;
  const name = request.body.name;
  response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${email}`);
});

app.get("/countries", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});

app.post("/api/countries", JsonParser, (request, response) => {
  const name = request.body.name;
  const countries = request.body.countries;
  response.send(`Your name is ${name} and you visited ${countries.length} countries. Keep traveling!`);
});

let articles = [];
app.get("/articlespage", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
});

app.post("/articles", upload.array(), (request, response) => {
  const name = request.body.title;
  articles.push(name);
  response.send(`New article added successfully with title "${name}" and ID ${articles.length}!`);
});
// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});