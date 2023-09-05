//FUNCIONES CLASICAS DE JAVA SCRIPT
function multiplicar() //() se denomina el argumento
{
    console.log('Probando función clásica')/**comillas simples cuando quiera imprimir una sola, 
    línea, para más de una línea se debe usar comilla doble*/
} 

// hacer uso o ejecutar una funciçon "invocar"

multiplicar(); /**solo con esta línea se ejecutá la función sin necesidad de que ocurra un 
evento que haya ejecutado por el usario*/

//FUNCION FLECHA DE JAVA SCRIPT
//cobra sentido para minimizar 
//una función tipo flecha es anónima no tiene nombre como las clásicas
//esta alojada en una constante, aquel que haga uso de la constante se va ejecutar la función
const dividir = () => {
    console.log('Probando fución flecha')
} /** * si la función ejecuta una sola línea de código, no hace falta poner la llave, sería
    const dividir = () => console.log('Probando fución flecha') */

//la función flecha se ejecuta a travez de la constante que la almacena seguida de ()
dividir();

//FUNCIONES CON RETORNO de manera clásica:

/** recomendaciones en los nombres de las funcones 
 si uso 2 palabras puedo  unirla con guoin medio o empezando la segunda palabra con mayuscula 
en este caso: obtener_datos o obtenerDatos
se suele recomendar el uso de verbos es su conjugación infinitiva 
NUNCA se empieza con mayuscula porque esas convenciones están asignadas a otro tipo de cosas
*/

function obtenerDatos(){
    const mensaje ='Probando funciones con retorno';
    return mensaje;
}

const respuesta = obtenerDatos(); //el valor que retorna es asignado a una constante
console.log('La respuesta de la funcion es: ${respuesta}'); //preguntar 

//FUNCION CON RETORNO Y PARAMETROS
function calcular (a,b)
{
    //let resultado = a+b;
    //otra forma es convertir los parametros ingresados en enteros 
    /** cuando no puede covertir un srting a un entero (letra/simbolo) arroja en mensaja NaN que
      significa que no puede resolver */
    let resultado = parseInt(a) + parseInt(b);
    return resultado;
    //+ en java concatena o suma para asegurarnos que suma debemos parsear los datos
}
 //pasamos a ejecutar dicha función //si nos paramos sobre la función nos dice que tipo de datos
 const respuesta2 = calcular(2,8);
console.log(respuesta2)

//COMUNICACION ENTRE FUNCIONES
const mostrar_sumatoria = () => {
    const sumatoria = calcular('/',8);
    console.log('El resultado de la suma es: ${sumatoria}')
    console.log(sumatoria)
} 
mostrar_sumatoria()

//FUNCIONES FLECHAS CON RETORNO Y SUS EXPRESIONES
//a continuación versión extensa: 
/**const diferencia = (x) => {
    return x -1;
}*/
//pero java permite refactorizar la función flecha de la siguiente manera:
 const diferencia = x => x -1 
 // si usaramos más de una parámetro si o si los parentesis const diferencia = (x,z) => x -z

const resultado3 = diferencia(10);
console.log(resultado3);

