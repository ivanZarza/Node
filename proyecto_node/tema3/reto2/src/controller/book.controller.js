const {Book} = require('../models/classBook');

const book1 = new Book(1, 1, "El señor de los anillos", "Aventura", "J.R.R. Tolkien", 100, "imagen");




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
    book_id ? book1.id_book = book_id : null;
    user_id ? book1.id_user = user_id : null;
    title ? book1.title = title : null;
    type ? book1.type = type : null;
    author ? book1.author = author : null;
    price ? book1.price = price : null;
    photo ? book1.photo = photo : null;
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