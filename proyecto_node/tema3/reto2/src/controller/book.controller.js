const {Book} = require('../models/classBook');

const book1 = new Book(1, 1, 'El señor de los anillos', 'Aventura', 'J.R.R. Tolkien', 100, 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/24fb5128-9aaf-4802-8222-047db4b93ef3/d_360_620/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.webp');
const book2 = new Book(2, 2, 'El hobit', 'Aventura', 'J.R.R. Tolkien', 150, 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/24fb5128-9aaf-4802-8222-047db4b93ef3/d_360_620/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.webp');
const book3 = new Book(3, 3, 'El señor de los anillos', 'Aventura', 'J.R.R. Tolkien', 100, 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/24fb5128-9aaf-4802-8222-047db4b93ef3/d_360_620/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.webp');
const book4 = new Book(4, 4, 'El hobit', 'Aventura', 'J.R.R. Tolkien', 150, 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/24fb5128-9aaf-4802-8222-047db4b93ef3/d_360_620/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.webp');
const book5 = new Book(5, 5, 'El señor de los anillos', 'Aventura', 'J.R.R. Tolkien', 100, 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/thumbs/24fb5128-9aaf-4802-8222-047db4b93ef3/d_360_620/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.webp');


let books = [book1, book2, book3, book4, book5];



function getBook(req, res) {
  try {
    const id = req.query.id;
    if (id) {
      const book = books.find(book => book.id_book === parseInt(id));
      if (!book) {
        return res.status(404).json({ ok: false, message: 'Libro no encontrado' });
      }
      return res.status(200).json({ ok: true, message: 'Exito!!', data: [book] });
    } else {
      return res.status(200).json({ ok: true, message: 'Exito!!', data: books });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
    console.log(error);
  }
}

function postBook (req, res) {
  try {
    const { id_book, id_user, title, type, author,price, image } = req.body;
    const book = new Book(id_book, id_user, title, type, author, price, image);
    console.log(book);
    books.push(book);
    console.log(req.body);
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
    const id = req.query.id;
    books = books.filter(book => book.id_book !== parseInt(id));
    res.status(200).json({ ok:true, message:'Exito!!', data:books });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

module.exports = { getBook, postBook, putBook, deleteBook };