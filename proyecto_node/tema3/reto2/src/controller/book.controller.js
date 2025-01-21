const {Book} = require('../models/classBook');

const book1 = new Book(1, 1, 'El señor de los anillos', 'Aventura', 'J.R.R. Tolkien', 100, 'imagen');




function getBook (req, res) {
  try {
    res.status(200).json({ ok:true, message:'Exito!!', data:book1 });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  } 
}

function postBook (req, res) {
  try {
    const { book_id, user_id, title, type, author,price, image } = req.body;
    const book = new Book(book_id, user_id, title, type, author, price, image);
    console.log(book);
    res.status(200).json({ ok:true, message:'Exito!!', data:book });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  } 
}

function putBook (req, res) {
  try {
    const { book_id, user_id, title, type, author,price, photo } = req.body;
    book1.id_book = book_id != undefined ? book_id : book1.id_book;
    book1.id_user = user_id != undefined ? user_id : book1.id_user;
    book1.title = title != undefined ? title : book1.title;
    book1.type = type != undefined ? type : book1.type;
    book1.author = author != undefined ? author : book1.author;
    book1.price = price != undefined ? price : book1.price;
    book1.photo = photo != undefined ? photo : book1.photo;
    res.status(200).json({ ok:true, message:'Exito!!', data:book1 });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}
    
function deleteBook (req, res) {
  try {
    book1.id_book = null;
    book1.id_user = null;
    book1.title = null;
    book1.type = null;
    book1.author = null;
    book1.price = null;
    book1.photo = null;
    res.status(200).json({ ok:true, message:'Exito!!', data:book1 });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getBook, postBook, putBook, deleteBook };