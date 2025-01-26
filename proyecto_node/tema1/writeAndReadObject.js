const fs = require('fs');

function writeAndRead(path, obj) {
  fs.writeFile(path, JSON.stringify(obj, null, 2), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Archivo creado');

      // Leer el archivo después de escribirlo
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
        }
      });
    }
  });
}

module.exports = {writeAndRead};