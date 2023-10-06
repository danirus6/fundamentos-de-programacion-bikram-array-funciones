//ARRAYS
//1
const arrayVacio = [];
//2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3
const arrayNumerosPares = [0, 2, 4, 6, 8];
//4
const arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]];

//FUNCIONES
//5
function suma(num1, num2) {
    return num1 + num2;
}
suma(3, 3);
//6
function potenciacion(num1, num2) {
    return Math.pow(num1, num2);
}
potenciacion(3, 3);
//7
function separarPalabras(a) {
    const myArraySplited = a.split(" ");
    return myArraySplited;
}
separarPalabras("Hola mundo");
//8
function repetirString(a, num1){
    let texto = "";
    for (let i = 0; i < num1; i++){
        texto += a;
    }
    return texto;
}
repetirString("ja", 3);
//9
function esPrimo(num1) {
    for (let i = 2; i < num1; i++){
        if (num1 % i === 0) {
            return false;
        }
        return true;
    }
}
esPrimo(6);
//10
function ordenarArray(arrNum) {
    return arrNum.sort(function(a, b){return a - b});
}
const ordenaEsta = [1, 42, 24, 6];
ordenarArray(ordenaEsta);

//11
function obtenerPares(arr) {
    const pares = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares.push(arr[i]);
        }
    }
    return pares;
}
const arrayEjemplo = [1, 2, 3, 4, 5, 6, 7, 8];
obtenerPares(arrayEjemplo);
//12
function pintarArray(arr) {
    const arrayJoin = arr.join(', ')
    return "["+ arrayJoin.toString()+ "]";
}
console.log(pintarArray(arrayEjemplo));

//13
function arrayMapi(arr, func) {
     const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(func(arr[i], i));
  }

  return resultado;
}

const arrayTranformador = [1, 2, 3, 4, 5];

const funcionTransformadora = (element, index) => element * 2;

/*
Esto y lo de arriba es lo mismo 
function duplicar(element, index) {
  return element * 2;
}
*/
arrayMapi(arrayTranformador, funcionTransformadora);

//14

function eliminarDuplicados(arrayD) {
    const arraySinDupli = [];
    arrayD.forEach(element => {
        if (!arraySinDupli.includes(element)) {
            arraySinDupli.push(element);
        }
    });
    return arraySinDupli;
}

const arrayD = [1, 2, 3, 4, 5, 2, 5];
eliminarDuplicados(arrayD);

//15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
//16
const holaMundo = ["Hola", "Mundo"];
//17
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
//18
const arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]];

//19
function multiplicacion(num1, num2) {
    return result = num1 * num2;
}
multiplicacion(2, 5);
//20
function division(num1, num2) {
    return result = num1 / num2;
}
division(2, 5);
//21
function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

esPar(4)
//22
/*function suma(a, b) {
  return a + b;
}*/

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}
const arrayFunciones = [suma, resta, multiplicacion];

const resultSuma = arrayFunciones[0](2, 5);
const resultResta = arrayFunciones[1](2, 5);
const resultMultiplicacion = arrayFunciones[2](2, 5);

//23
function ordenarArray2(arrNum) {
    return arrNum.sort(function (a, b) { b - a }
    );
}
const numeros = [6, 60, 51];
const arrayOrdenado = ordenarArray2(numeros);
//24
function obtenerImpares(arrNum) {
    return arrNum.filter(num => num % 2 !== 0);
}
const arrayNumerosRandom = [1, 2, 3, 4, 5, 6];
const impares = obtenerImpares(arrayNumerosRandom);

//25
function sumarArray(arrNum) {
    let suma = 0;
    for (let i = 0; i < arrNum.length; i++) {
                 suma += arrNum[i];
    }
    return suma;
 }

const arraySumar = [1, 2, 3]
const resultSumar = sumarArray(arraySumar);
//26
function multiplicarArray(arrNum) {
    let multiplic = 1;
    for (let i = 0; i < arrNum.length; i++) {
        multiplic *= arrNum[i];
    }
    return multiplic;
}
const arrayMultip = [2, 3, 4]
const resultMultip = multiplicarArray(arrayMultip);
console.log(resultMultip);