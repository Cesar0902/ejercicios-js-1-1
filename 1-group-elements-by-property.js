// 1. 🔁 Agrupar elementos por propiedad
// Dado un arreglo de objetos, agrúpelos por el valor de una propiedad específica.

const datos = [
 { categoria: 'fruta', nombre: 'manzana' },
 { categoria: 'verdura', nombre: 'zanahoria' },
 { categoria: 'fruta', nombre: 'banana' },
 { categoria: 'verdura', nombre: 'lechuga' }
];

const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);

// Resultado esperado:
// {
// fruta: [
// { categoria: 'fruta', nombre: 'manzana' },
// { categoria: 'fruta', nombre: 'banana' }
// ],
// verdura: [
// { categoria: 'verdura', nombre: 'zanahoria' },
// { categoria: 'verdura', nombre: 'lechuga' }
// ]
// }

function agruparPorPropiedad(arr, propiedad) {
  const categorias = {};

  arr.forEach(element => {
    const clave = element[propiedad];
    if (!categorias[clave]) {
      categorias[clave] = [];
    }
    categorias[clave].push(element);
  });

  return categorias;
}