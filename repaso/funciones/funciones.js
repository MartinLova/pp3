//FUNCIONES CLASICAS DE JAVA SCRIPT
function recolectar()
{
    const d1 = document.getElementById("inp_d1").value
    const d2 = document.getElementById("inp_d2").value
    const tipo_operacion = document.getElementById("slt_operacion").value

    const respuesta = calcular(d1,d2,tipo_operacion)
    cambiarlabel(tipo_operacion)
    //console.log(respuesta) 
    document.getElementById("h_resultado").textContent = 'Resultado: ' + respuesta
} 

function calcular(dato1,dato2,operacion)//parametros van dentro del argumento de la función
{
    let resultado = null
    if (operacion == 0) {
        alert('sumamos')
        resultado = Number(dato1) + Number(dato2)
    }

    if (operacion == 1) {
        alert('restamos')
        resultado = dato1 - dato2
    }
/**para comentar varias líneas */ 
    if (operacion == 2) {
        alert('multiplicamos')
        resultado = dato1 * dato2
    }
    if (operacion == 3) {
        alert('dividimos')
        resultado = dato1 / dato2
    }
    //la respuesta que entrega o reponde la función calcular
    return resultado
} 



function multiplicar() //() se denomina el argumento
{
    console.log('Probando función clásica')//comillas simples cuando quiera imprimir una sola, línea, para más de una línea se debe usar comilla doble
} 

// hacer uso o ejecutar una funciçon 
multiplicar();

function cambiarlabel()
{
    if(operacion == 0) {
        const label = document.getElementById("lb1_d1").value
        label.textContent = '2doValorsuma'
    }
    if(operacion == 2) {
        const label = document.getElementById("lb1_d1").value
        label.textContent = '2dovalorresta'
    }
     if(operacion == 3) {
        const label = document.getElementById("lb1_d1").value
        label.textContent = '2do_dividendo'
    }  
 
    
}