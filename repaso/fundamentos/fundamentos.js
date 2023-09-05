function mostrar() {
    alert('Probando mi función')
}
//FUNDAMENTOS

//variables (let y var)

//se declara variable y se le asigna un valor
var edad = 10
var edad = 20 //permite aunque ya este declarada permite redefinir la variable
console.log(edad) //20
console.log('Edad:', edad) //20
// para variable global que serán utilizadas en todo el progrma
//si las instrucciones están fuera de llaves de funciones se ejecutan pues no están a la espera de que sea invocada por botton o código html

//Declaro una única vez la variable usado LET
let edades = 15
edades = 20
console.log('Edades:', edades) //20

var antiguedad = 10
if(antiguedad > 5){
    var antiguedad = 30
    console.log('Antiguedad', antiguedad)
}
console.log('Antiguedad', antiguedad)

let numero = 10
if (numero >5){
    let numero = 20
    console.log('Numero: ', numero)
}
console.log('Numero: ', numero)
// otro ejemplo
var number = 15
if (numero >5){
    let number = 35
    console.log('Numero: ', number)
}
console.log('Numero: ', number)

//CONSTANTES
// se crea y asigna
const dni = 30914000
//Error de sintaxis-Nose puede asignar un nuevo valor a una constante
//dni = 33222444
connsole.log('Constante: ',dni)

const age = 22
if(age > 21){
    const age = 35
    console.log(age)
}//dentro de cada llave se puede generar una constante con el mismo nombre que otra constante previamente creada
console.log(age)

//arreglos
const miArreglo = [10,20,30]
miArreglo.push(40)
console.log(miArreglo)

//Objetos
const persona = {
    nombre: 'Pepe',
    edad:20
}

console.log(persona.nombre)