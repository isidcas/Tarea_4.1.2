//Crea El código necesario que:

//Declara una variable cuyo nombre sea cadena y tenga el valor “Hola Mundo”.

var cadena = "Hola Mundo"

//Muestra por consola la longitud de la cadena.

console.log("Longitud de la cadena:", cadena.length);

//Muestra por consola la cadena con todos sus caracteres en mayúsculas.

console.log(cadena.toUpperCase());

//Muestra por consola la cadena con todos sus caracteres en minúsculas.

console.log(cadena.toLowerCase());

//Muestra por consola la posición de la cadena en la que se encuentra la letra o.

console.log(cadena.indexOf('o'));

//Muestra por consola la posición de la cadena en la que se encuentra la cadena “Hola”.

console.log(cadena.indexOf("Hola"));

//Reemplaza la cadena “Mundo” por la cadena “Youtube” y muestra el resultado.

var nuevaCadena = cadena.replace("Mundo", "Youtube");
console.log(nuevaCadena);

//Extrae la segunda parte de la cadena y muéstrala por consola.

var posicionEspacio = cadena.indexOf(" "); // Buscamos el espacio en la cadena y obtenemos su posición


var segundaParte = cadena.substring(posicionEspacio + 1);// Extraemos la parte de la cadena que está después del espacio


console.log(segundaParte);// En "Hola Mundo", esto nos da "Mundo"


//Comprueba si la cadena empieza por “h”.

console.log( cadena.startsWith('h'));

//Comprueba si la cadena empieza por “H”.

console.log( cadena.startsWith('H'));

//Muestra Utilizando por TEMPLATE consola la STRINGS letra JAV/ASCRIPT

var mensaje = "Esto es un ejemplo con Template Strings";
console.log(`Mensaje: ${mensaje}`);


//“r” declara 10 veces.

var letraRepetida = "r".repeat(10);
console.log(letraRepetida);


//3 variables con tu nombre, apellidos y edad y muéstralas por consola introduciéndolas dentro de una cadena.