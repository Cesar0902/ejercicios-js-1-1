// 4. 🎭 Copiar y modificar objetos
// Crea una función que reciba un objeto persona y retorne una copia modificada con un nuevo
// nombre y la edad aumentada en 1 año, sin modificar el objeto original.
const persona = { nombre: 'Luis', edad: 30 };
const nuevaPersona = modificarPersona(persona, 'Carlos');
console.log(nuevaPersona); // Resultado esperado: { nombre: 'Carlos', edad: 31 }

function modificarPersona(persona, nuevoNombre) {
  return {
    ...persona,
    nombre: nuevoNombre,
    edad: persona.edad + 1
  }
}