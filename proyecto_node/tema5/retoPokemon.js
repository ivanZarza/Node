let index = 0;

let botonBuscar = document.getElementById('botonBuscar');
let botonSiguiente = document.getElementById('botonSiguiente');
let botonAnterior = document.getElementById('botonAnterior');

botonBuscar.addEventListener('click', function() {
    let nombre = document.getElementById('nombrePokemon').value;
    buscar(nombre);
    document.getElementById('nombrePokemon').value = "";
});

botonSiguiente.addEventListener('click', function() {
    buscarSiguiente();
    console.log(index);
});

botonAnterior.addEventListener('click', function() {
    buscarAnterior();
});


async function buscar(nombre) {
    let url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;

    let param = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        let data = await fetch(url, param);
        let result = await data.json();
        console.log(result);
        mostrarResultado(result);
        index = result.id;
        return result, index;

    } catch (error) {
        console.log(error);
        mostrarError('Pokemon no encontrado');
    }
}

async function buscarSiguiente() {
    index++;
    let url = `https://pokeapi.co/api/v2/pokemon/${index}`;

    let param = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        let data = await fetch(url, param);
        let result = await data.json();
        console.log(result);
        mostrarResultado(result);
        return result;

    } catch (error) {
        console.log(error);
        mostrarError('Pokemon no encontrado');
    }
}

async function buscarAnterior() {
  index--;
  let url = `https://pokeapi.co/api/v2/pokemon/${index}`;
  
  let param = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  };

  try {
      let data = await fetch(url, param);
      let result = await data.json();
      console.log(result);
      mostrarResultado(result);
      return result;

  } catch (error) {
      console.log(error);
      mostrarError('Pokemon no encontrado');
  }
}

function mostrarResultado(pokemon) {
  
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <table>
            <tr>
                <th>Altura</th>
                <td>${pokemon.height}</td>
            </tr>
            <tr>
                <th>Peso</th>
                <td>${pokemon.weight}</td>
            </tr>
            <tr>
                <th>Habilidades</th>
                <td>${pokemon.abilities.map(ability => ability.ability.name).join(' / ')}</td>
            </tr>
            <tr>
                <th>Tipos</th>
                <td>${pokemon.types.map(type => type.type.name).join(' / ')}</td>
            </tr>
        </table>
    `;
}

function mostrarError(mensaje) {
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `
      <h2>${mensaje}</h2>
  `;
}