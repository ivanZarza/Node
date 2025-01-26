const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');



function rellenarObjeto(callback) {
  const rl = readline.createInterface({ input, output });
  const nombre = '¿Cual es tu nombre?';
  const apellido = '¿Cual es tu apellido?';
  const age = '¿Cual es tu edad?';
  const objetoAutomatico = {
    name: '',
    surname: '',
    age: ''
  }

  rl.question(nombre, (respuesta) => {
    objetoAutomatico.name = respuesta;

    rl.question(apellido, (respuesta) => {
      objetoAutomatico.surname = respuesta;

      rl.question(age, (respuesta) => {
        objetoAutomatico.age = respuesta;
        callback(objetoAutomatico);
        rl.close();
      });
    });
  }
  );
};

module.exports = {rellenarObjeto};
