// 6. 🧠 Combinar dos listas sin repetir elementos
// Crea una función que reciba dos arreglos y devuelva un nuevo arreglo que contenga todos los
// elementos sin repetir.
const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];
const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado); // Resultado esperado: ['manzana', 'pera', 'banana', 'uva', 'sandía']

function combinarListasSinRepetir(arr1, arr2) {
  return [... new Set([...arr1, ...arr2])];
}