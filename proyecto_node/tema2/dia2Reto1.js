
const fs = require('fs/promises');

const objetoAMano = {
  name: 'Ico',
  surname: 'Nico',
  age: 77
}

function writeAndRead() {
  fs.writeFile('dia2_Reto1b.json', JSON.stringify(objetoAMano, null, 2))
    .then(() => fs.readFile('dia2_Reto1b.json', 'utf-8'))
    .then(data => console.log(data))
    .catch(err => console.error(err));
}



/* async function writeAndRead() {
  try {
    await fs.writeFile('dia2_Reto1b.json', JSON.stringify({ objetoAMano}, null, 2));
    const data = await fs.readFile('dia2_Reto1b.json', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
} */

 writeAndRead();