const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const routes = require("./route");

const fs = require('fs');
let data = fs.readFileSync('books.json');
let bookscollection = JSON.parse(data);

// API Get List Buku
app.get('/api/book/list', routes.list);

//API Get Detail
app.get('/api/book/:id/', routes.detail);

//API Post
app.post('/api/book', routes.addBook);

//API Delete
app.delete('/api/book/:id/', routes.deleteBook);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));