function cambiarlabel()
{
 document.getElementById("inp_d1").value = '' 
 document.getElementById("inp_d2").value = ''   
 const tipo_operacion = document.getElementById("slt_operacion").value   
 console.log(tipo_operacion)
 if(tipo_operacion == 0)   
 {
    document.getElementById("lbl_d1").textContent = 'Ingrese valor de Tensión en Volts' 
    document.getElementById("lbl_d2").textContent = 'Ingrese valor de Intensidad en Amper' 
 }
 if(tipo_operacion == 1)   
 {
    document.getElementById("lbl_d1").textContent = 'Ingrese valor de Tensión en Volts' 
    document.getElementById("lbl_d2").textContent = 'Ingrese valor de Resistencia en Ohm' 
 }
 if(tipo_operacion == 2)   
 {
    document.getElementById("lbl_d1").textContent = 'Ingrese valor de Intensidad en Amper'
    document.getElementById("lbl_d2").textContent = 'Ingrese valor de Resistencia en Ohm' 
 }
}


function recolectar()
{
    const d1 = document.getElementById("inp_d1").value
    const d2 = document.getElementById("inp_d2").value
    const tipo_operacion = document.getElementById("slt_operacion").value

    const respuesta = calcular(d1,d2,tipo_operacion)

    console.log(respuesta) 
    document.getElementById("h_resultado").textContent = 'Resultado: ' + respuesta
} 

function calcular(dato1,dato2,operacion)
{
    let resultado = null
    if (operacion == 0) {
        resultado = dato1 / dato2
        ummagnitud = 'Ohm'
    }

    if (operacion == 1) {
        resultado = dato1 / dato2
        ummagnitud = 'Ampers'
    }

    if (operacion == 2) {document.getElementById("inp_d1").value = '' 
    document.getElementById("inp_d2").value = ''
        resultado = dato1 * dato2
        ummagnitud = 'Volts'
    }

    
    return resultado +': '+ummagnitud
} 

/**function vaciar() 
{(if ummagnitud != '')
    {
        document.getElementById("slt_operacion").value = -1
        document.getElementById("lbl_d1").textContent = ''
        document.getElementById("lbl_d2").textContent = ''
        document.getElementById("inp_d1").value = '' 
        document.getElementById("inp_d2").value = ''
        ummagnitud = ''
    }
}*/

