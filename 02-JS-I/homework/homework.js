// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hello";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}


function suma(x, y) {
  var Suma = x + y;
  return Suma;
}
suma(2, 3);

function resta(x, y) {
  var Resta = x - y;
  return Resta;
}
resta(3, 2);

function multiplica(x, y) {
  var Multiplica = x * y;
  return Multiplica;
}
multiplica(2, 3);

function divide(x, y) {
  var Divide = x / y;
  return Divide;
}
divide(2, 3);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x == y) {
    return true;
  }
  return false;
}
sonIguales(3, 5)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if(str1.length === str2.length){
=======
  if (str1 === str2) {
>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4
    return true;
  }
  return false;
}
tienenMismaLongitud("str1", "str2");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    return false;
  }
  return true;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
}
function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num  % 2 === 0) {
=======
  if (num % 2 === 0) {
>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4
    return true;
  }
  return false;
}
esPar()
<<<<<<< HEAD
=======

>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4
function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num  % 2 === 0) {
    return false;
  }
  return true;
}
=======
  var numero = 9;
    
  if(numero % 2 == 0){
      
      return(  true);
  
  }else{
      
      return( false);
      
  }
}
esImpar()

>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
<<<<<<< HEAD
  return Math.pow(num, 2);
=======
  var num = Math.pow(8, 2);
  return num;
   
>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
<<<<<<< HEAD
  return Math.pow(num,3);
=======
  var num = Math.pow(8,3);
  return(num);
>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return(Math.pow(5, 2));
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var num = Math.floor(4.5);
  return(num);
}
redondearNumero()

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var num = Math.round(5.9);
  return num;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var inicio = 0;
  var final = 1;
  let Aleatorio = inicio + Math.floor(Math.ramdom() * final)
  return Aleatorio;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreApellido = (nombre + apellido)
  return nombreApellido;
}
combinarNombres("Albeiro", " Bedoya");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola "+""+"Martin!";
}
obtenerSaludo();

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return "El area del rectangulo es " + area;


}
obtenerAreaRectangulo(4, 9)

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var Perimetro = 4 * lado;
  return "El perimetro del cuadrado  es: " + Perimetro + "cm";
}
retornarPerimetro(5)

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
<<<<<<< HEAD
  return (base * altura ) / 2;
=======
  var Area = base * altura / 2;
  return "El area del Triangiulo es " + Area;
>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4
}
areaDelTriangulo(8, 4)

function deEuroAdolar(euro) {
<<<<<<< HEAD
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20;
}
deEuroAdolar(1)
=======
  var Dolar = euro * 1.20;
  return "10 euros equivalen a " + Dolar + " Dolares";
}
deEuroAdolar(10)

>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
<<<<<<< HEAD

 if(letra.length > 1) {
  return "Dato incorrecto"
 }else if(letra=== "a" ||letra=== "e"| letra=== "i"|letra=== "o"|letra=== "u"){
  return "Es vocal";
 }
 return "Dato incorrecto"
}  
esVocal("a")
=======
 var correcto = "Es vocal";
 var incorrecto = "Dato Incorrecto";
 if(letra.length > 1) return incorrecto;
 if(letra=== "a" ||letra=== "e"| letra=== "i"|letra=== "o"|letra=== "u"){
  return correcto;
 }
 else return  incorrecto;  
 
 

}
esVocal()
>>>>>>> 237c95a4c0e1c9f6fd21dac02399a393ca2fe1e4

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
