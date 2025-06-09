// 5. 🔁 Eliminar duplicados por propiedad
// Escriba una función que reciba un arreglo de objetos y elimine duplicados basándose en una
// propiedad específica.
const elementos = [
 { id: 1, nombre: 'A' },
 { id: 2, nombre: 'B' },
 { id: 1, nombre: 'A' }
];
const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado); // Resultado esperado: [{ id: 1, nombre: 'A' }, { id: 2, nombre: 'B' }]

function eliminarDuplicados(arr, propiedad) {
  const elementosUnicos = {};
  arr.forEach(item => {
    if (!elementosUnicos[item[propiedad]]) {
      elementosUnicos[item[propiedad]] = item;
    }
  });

  return Object.values(elementosUnicos);
}