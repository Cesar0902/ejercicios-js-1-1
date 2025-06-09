// 3. 🧮 Calcular promedio ponderado
// Dado un arreglo de objetos con valores y pesos, calcula el promedio ponderado.

const notas = [
 { valor: 90, peso: 0.5 },
 { valor: 80, peso: 0.3 },
 { valor: 70, peso: 0.2 }
];
const resultado = promedioPonderado(notas);
console.log(resultado); // Resultado esperado: 83

function promedioPonderado(notas) {
  let acumulador = 0;

  notas.forEach(nota => {
    acumulador += nota.valor * nota.peso;
  });

  return Math.round(acumulador);
}

