const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');
let data = fs.readFileSync('books.json');
let bookscollection = JSON.parse(data);

//get list
function list(req, res) {
    res.send(bookscollection);
}
//get detail
function detail(req, res) {
    const book = bookscollection.find(c => parseInt(c.id) === parseInt(req.params.id));
    if (!book) {
        res.status(404).send('The Book with given ID was not found!');
    }
    res.send(book);
}
//post
function addBook(req, res) {
    const checkBookTitle = validateBookTitle(req.body.title);
    const checkBookAuthor = validateBookAuthor(req.body.author);

    if (!checkBookTitle && !checkBookAuthor) {
        res.status(400).send('Book title and book author are required and must contain characters greater than 3');
    }
    if (!checkBookTitle) {
        res.status(400).send('Book Title is required and it must be greater than 3 characters');
        return;
    }
    if (!checkBookAuthor) {
        res.status(400).send('Book Author is required and it must be greater than 3 characters');
        return;
    }

    const book = {
        id: (bookscollection.length + 1).toString(),
        title: req.body.title,
        author: req.body.author

    };
    bookscollection.push(book);
    const newBookCollection = JSON.stringify(bookscollection, null, 4);
    fs.writeFile('books.json', newBookCollection, doneProcessing);
    res.send(book);

}
//delete
function deleteBook(req, res) {
    const book = bookscollection.find(c => parseInt(c.id) === parseInt(req.params.id));
    if (!book) {
        res.status(404).send('The Book with given ID was not found!');
    }
    const indexToBeDeleted = bookscollection.indexOf(book);
    bookscollection.splice(indexToBeDeleted, 1);
    const newBookCollection = JSON.stringify(bookscollection, null, 4);
    fs.writeFile('books.json', newBookCollection, doneProcessing);
    res.send(book);
}

function doneProcessing() {
    console.log();
}


function validateBookTitle(bookTitle) {
    if (!bookTitle || bookTitle.length < 3) {
        return false;
    } else {
        return true;
    }

}
function validateBookAuthor(bookAuthor) {
    if (!bookAuthor || bookAuthor.length < 3) {
        return false;
    } else {
        return true;
    }
}


module.exports = {
    list,
    detail,
    addBook,
    deleteBook
}