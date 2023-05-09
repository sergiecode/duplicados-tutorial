![Como eliminar los duplicados en un array](https://raw.githubusercontent.com/sergiecode/duplicados-tutorial/master/duplicados-tutorial.jpg)

# Cómo eliminar duplicados en un array en JavaScript

Este es un tutorial sobre cómo eliminar duplicados en un array en JavaScript. En este tutorial, te mostraré cómo puedes usar el método `filter()` y el objeto `Set` para crear una nueva matriz que contenga solo valores únicos.

## Requisitos previos

Antes de comenzar este tutorial, necesitarás tener un conocimiento básico de JavaScript, especialmente sobre arrays y el método `filter()`.

## Paso 1 - Crear un array con duplicados

En este primer paso, crearemos un array que contenga algunos valores duplicados para que podamos demostrar cómo eliminarlos. Aquí está el código que puedes usar:

    `const myArray = [1, 2, 3, 3, 4, 5, 5, 6];` 

## Paso 2 - Usar el método `filter()`

El método `filter()` nos permite crear una nueva matriz a partir de otra matriz, filtrando los elementos de la matriz original según una condición determinada. En nuestro caso, queremos crear una nueva matriz que solo contenga valores únicos. Para hacer esto, podemos usar el objeto `Set`, que nos permite crear una colección de valores únicos.

Aquí está el código que puedes usar:

    `const uniqueArray = myArray.filter((value, index, array) => {
      return array.indexOf(value) === index;
    });` 

En este código, estamos usando el método `filter()` en nuestro array `myArray`. La función de devolución de llamada dentro del método `filter()` toma tres argumentos: el valor actual del elemento, el índice del elemento en el array y el array completo. Dentro de esta función, estamos usando el método `indexOf()` para verificar si el índice del elemento actual es igual al índice de la primera ocurrencia del elemento en el array. Si lo es, significa que es la primera vez que hemos encontrado este elemento y, por lo tanto, es un valor único. En este caso, la función de devolución de llamada devuelve `true` y el valor se incluirá en la nueva matriz `uniqueArray`. Si no es así, la función de devolución de llamada devuelve `false` y el valor no se incluirá en la nueva matriz.

## Paso 3 - Comprobar el resultado

Ahora que hemos creado nuestra nueva matriz `uniqueArray`, podemos comprobar si se han eliminado correctamente los duplicados. Aquí está el código que puedes usar:

    `console.log(uniqueArray);` 

Este código imprimirá la nueva matriz en la consola del navegador. Deberías ver que la nueva matriz solo contiene valores únicos y que los duplicados se han eliminado.

¡Eso es todo! Ahora sabes cómo eliminar duplicados en un array en JavaScript. Si tienes alguna pregunta o comentario, no dudes en dejarlos a continuación.
