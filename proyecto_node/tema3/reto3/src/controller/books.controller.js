const { Book } = require('../models/classBook');

const book1 = new Book(1, 1, 'El señor de los anillos', 'Aventura', 'J.R.R. Tolkien', 100, 'imagen1');
const book2 = new Book(2, 1, 'El hobit', 'Aventura', 'J.R.R. Tolkien', 90, 'imagen2');
const book3 = new Book(3, 1, 'El silmarillion', 'Aventura', 'J.R.R. Tolkien', 80, 'imagen3');
const book4 = new Book(4, 1, 'Las aventuras de Tom Bombandil', 'Aventura', 'J.R.R. Tolkien', 70, 'imagen4');
const book5 = new Book(5, 2, 'El imperio contraataca', 'Aventura', 'George Lucas', 60, 'imagen5');
const book6 = new Book(6, 2, 'El retorno del jedi', 'Aventura', 'George Lucas', 50, 'imagen6');
const book7 = new Book(7, 2, 'Una nueva esperanza', 'Aventura', 'George Lucas', 40, 'imagen7');

let books = [book1, book2, book3, book4, book5, book6, book7];

function getBooks(req, res) {
  let id = req.query.id
  if (id) {
    let book = books.find((book) => book.id_book == id);
    if (!book) {
      res.status(404).json({ ok: false, message: 'No se encontro el libro por el id' });
    }
    try {
      res.status(200).json({ ok: true, message: 'Exito!!', data: book });
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  } else {
    try {
      res.status(200).json({ ok: true, message: 'Exito!!', data: books });
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  }
}

function postBook(req, res) {
  let { id_book, id_user, title, type, author, price, photo } = req.body;
  let book = new Book(id_book, id_user, title, type, author, price, photo);
  books.push(book);
  try {
    res.status(200).json({ ok: true, message: 'Exito!!', data: book });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

function putBook(req, res) {
  let id = req.query.id
  if(!id){
    res.status(400).json({ ok: false, message: 'Se necesita un id' });
  }
  let book = books.find((book) => book.id_book == id);
  if (!book) {
    res.status(404).json({ ok: false, message: 'No se encontro el libro' });
  }
  try {
    const { id_book, id_user, title, type, author, price, photo } = req.body;
    book1.id_book = id_book != undefined ? id_book : book1.id_book;
    book1.id_user = id_user != undefined ? id_user : book1.id_user;
    book1.title = title != undefined ? title : book1.title;
    book1.type = type != undefined ? type : book1.type;
    book1.author = author != undefined ? author : book1.author;
    book1.price = price != undefined ? price : book1.price;
    book1.photo = photo != undefined ? photo : book1.photo;
    res.status(200).json({ ok: true, message: 'Exito!!', data: books });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

function deleteBook(req, res) {
  let id = req.query.id
  if(!id){
    res.status(400).json({ ok: false, message: 'Se necesita un id' });
  }
  let book = books.find((book) => book.id_book == id);
  if (!book) {
    res.status(404).json({ ok: false, message: 'No se encontro el libro' });
  }
  try {
    books = books.filter((book) => book.id_book != id);
    res.status(200).json({ ok: true, message: 'Exito!!', data: books });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getBooks, postBook, putBook, deleteBook };