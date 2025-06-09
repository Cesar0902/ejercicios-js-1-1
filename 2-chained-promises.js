// 2. ⛓️ Promesas encadenadas

// Escribe una función obtenerUsuario(id) que simule una llamada asíncrona con setTimeout y
// retorne una promesa que se resuelve con un objeto { id, nombre }.
// Encadena dos llamadas para obtener los nombres de dos usuarios diferentes y mostrar el mensaje:

// "Usuarios cargados: Juan y María"

const datos = {
  1: { id: 1, nombre: 'Juan' },
  2: { id: 2, nombre: 'María' },
};

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = datos[id];
      if (usuario) {
        resolve(usuario);
      } else {
        reject(new Error(`Usuario con ID ${id} no encontrado`));
      }
    }, 1000);
  });
}

obtenerUsuario(1)
  .then((usuario1) => {
    return obtenerUsuario(2).then((usuario2) => {
      console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
    });
  })
  .catch((error) => {
    console.error('Error al cargar los usuarios:', error.message);
  });
