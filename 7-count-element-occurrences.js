// 📦 Contar cuántas veces aparece cada elemento
// Crea una función que reciba un arreglo de palabras y retorne un objeto donde las claves sean las
// palabras y los valores la cantidad de veces que aparecen.
const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola',
'gracias'];
const resultado = contarPalabras(palabras);
console.log(resultado);
// Resultado esperado: { hola: 3, adiós: 1, gracias: 2 }

function contarPalabras(arr) {
  const contador = {};
  for (const palabra of arr) {
    if (contador[palabra]) {
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  }
  return contador;
}