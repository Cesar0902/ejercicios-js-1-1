// 9. 🕰 Simular carga con promesa y setTimeout
// Crea una función que simule una carga de datos usando setTimeout y devuelva una promesa que
// se resuelve después de 2 segundos con el mensaje: "Datos cargados correctamente".
cargarDatos().then((mensaje) => {
 console.log(mensaje);
});
// Resultado esperado (después de 2 segundos): "Datos cargados correctamente"

function cargarDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos cargados correctamente");
    }, 2000);
  })
}