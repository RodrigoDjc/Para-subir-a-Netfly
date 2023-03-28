export const getRandomNumber = (min, max) => {
  const amplitud = max - min;
  const randomAmplitude = Math.round(Math.random() * amplitud);
  return min + randomAmplitude;
};
/* ¡Claro que sí! Esta función se llama "getRandomNumber" y sirve para obtener un número aleatorio
 entre dos números que le pasamos como argumentos.

Por ejemplo, si le pedimos un número aleatorio entre 1 y 10, esta función nos dará un número aleatorio
 que puede ser 1, 2, 3, 4, 5, 6, 7, 8, 9 o 10.

Aquí te explico paso a paso cómo funciona:

Primero, le decimos a la función cuál es el número mínimo que queremos que nos dé y cuál es 
el número máximo que queremos que nos dé. Por ejemplo, si queremos un número aleatorio entre 
1 y 10, le diremos a la función que el número mínimo es 1 y el número máximo es 10.

Luego, la función calcula la "amplitud" entre el número máximo y el número mínimo. Esto es
 simplemente la diferencia entre el número máximo y el número mínimo. En nuestro ejemplo, la amplitud sería
  de 10 - 1 = 9.

Después, la función utiliza la función "Math.random()" para generar un número aleatorio entre
 0 y 1. Este número aleatorio se multiplica por la amplitud que acabamos de calcular (en nuestro ejemplo, 9)
  para obtener un número aleatorio entre 0 y la amplitud.

El número aleatorio obtenido en el paso anterior se redondea al número entero más cercano utilizando 
la función "Math.round()". Esto significa que si obtenemos un número aleatorio de 3,2, se redondeará a 3,
 y si obtenemos un número aleatorio de 7,8, se redondeará a 8.

Por último, a este número redondeado se le suma el número mínimo que habíamos especificado al principio.
 En nuestro ejemplo, si el número aleatorio redondeado es 5, se le sumaría 1 (el número mínimo) para obtener
  un número aleatorio final de 6.

¡Y eso es todo! Espero que haya quedado claro. */
