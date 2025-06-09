// 10. 🔍 Verificar si todos los elementos cumplen una condición
// Crea una función que reciba una lista de edades y verifique si todos los elementos son mayores de
// edad (18 años o más).
const edades = [19, 25, 32, 17];
const resultado = verificarMayoresDeEdad(edades);
console.log(resultado); // Resultado esperado: false

function verificarMayoresDeEdad(edades) {
  for (let edad of edades) {
    if (edad < 18) {
      return false;
    }
  }
  return true;
}