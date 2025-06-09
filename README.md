# 📚 Ejercicios de JavaScript - Nivel 1

Este repositorio contiene una colección de 10 ejercicios prácticos de JavaScript diseñados para fortalecer conceptos fundamentales del lenguaje, incluyendo manipulación de arrays, objetos, promesas y funciones de orden superior.

## 🚀 Cómo clonar el repositorio

Para obtener una copia local del repositorio, ejecuta el siguiente comando en tu terminal:

```bash
git clone https://github.com/Cesar0902/ejercicios-js-1-1.git
```

Luego navega al directorio del proyecto:

```bash
cd ejercicios-js-1-1
```

## 🏃‍♂️ Cómo ejecutar los ejercicios

### Prerrequisitos
- Node.js instalado en tu sistema
- Terminal o línea de comandos

### ⚡ Ejecución rápida con autocompletado
Para ejecutar cualquier ejercicio de forma rápida, simplemente escribe:

```bash
node [número]
```

Y presiona **Tab** para autocompletar. Por ejemplo:
- Escribe `node 1` + **Tab** → se autocompleta a `node 1-group-elements-by-property.js`
- Escribe `node 5` + **Tab** → se autocompleta a `node 5-delete-duplicate.js`
- Escribe `node 10` + **Tab** → se autocompleta a `node 10-check-all-elements-meet-condition.js`

### Ejecución individual
Para ejecutar cualquier ejercicio específico por nombre completo:

```bash
node nombre-del-archivo.js
```

Ejemplos específicos:
```bash
node 1-group-elements-by-property.js
node 2-chained-promises.js
node 3-weighted-average.js
node 4-copy-and-modify-objects.js
node 5-delete-duplicate.js
node 6-merge-unique-arrays.js
node 7-count-element-occurrences.js
node 8-filter-products-by-conditions.js
node 9-simulate-data-loading-with-promise.js
node 10-check-all-elements-meet-condition.js
```

### Ejecución de todos los ejercicios
Para ejecutar todos los ejercicios de una vez:

```bash
# En sistemas Unix/Linux/macOS
for file in *.js; do echo "=== Ejecutando $file ===" && node "$file" && echo; done

# En Windows (PowerShell)
Get-ChildItem *.js | ForEach-Object { Write-Host "=== Ejecutando $($_.Name) ==="; node $_.Name; Write-Host }
```

## 📋 Lista de Ejercicios

1. **Agrupar elementos por propiedad**: Crea una función que agrupe un arreglo de objetos por una propiedad dada.
2. **Promesas encadenadas**: Utiliza promesas para ejecutar una serie de operaciones asincrónicas en secuencia.
3. **Media ponderada**: Calcula la media ponderada de un conjunto de notas con sus respectivos créditos.
4. **Copiar y modificar objetos**: Crea una función que copie un objeto y modifique una propiedad específica.
5. **Eliminar duplicados**: Elimina los elementos duplicados de un arreglo.
6. **Fusionar arreglos únicos**: Fusiona dos o más arreglos en uno solo, eliminando los elementos duplicados.
7. **Contar ocurrencias de elementos**: Cuenta cuántas veces aparece cada elemento en un arreglo.
8. **Filtrar productos por condiciones**: Filtra un arreglo de productos según condiciones específicas (precio, disponibilidad, etc.).
9. **Simular carga de datos con promesa**: Crea una función que simule la carga de datos con una promesa que se resuelve después de un tiempo.
10. **Verificar si todos los elementos cumplen una condición**: Comprueba si todos los elementos de un arreglo cumplen con una condición dada.