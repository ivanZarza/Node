const { writeAndRead } = require('./writeAndReadObject');
const { rellenarObjeto } = require('./readConsole');

const path = 'reto4.json';

rellenarObjeto(objetoAutomatico => {
  writeAndRead(path, objetoAutomatico);
});