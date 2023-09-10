const valorka = 2900000
const valorfiesta = 3350000
const valorfocus = 3960000
const dto_ka = 0.15
const dto_fiesta = 0.05
const dto_focus = 0.1
/** Originalmente pero no se como convertir el texto a moneda 
document.getElementById("precio_ka").textContent = '$ ' + valorka
document.getElementById("precio_fiesta").textContent = '$ ' + valorfiesta
document.getElementById("precio_focus").textContent = '$ ' + valorfocus
 */
document.getElementById("precio_ka").textContent = '$ 2.900.000,00'
document.getElementById("precio_fiesta").textContent = '$ 3.350.000,00'
document.getElementById("precio_focus").textContent = '$ 3.960.000,00'


function calcular()
{
    const vehiculo = document.getElementById("slt_operacion").value
    if (vehiculo == 0) {
        resultado = valorka - (valorka * dto_ka)
    }
    if (vehiculo == 1) {
        resultado = valorfiesta - (valorfiesta * dto_fiesta)
    }
    if (vehiculo == 2) {
        resultado = valorfocus - (valorfocus * dto_focus)
    }
    document.getElementById("h_resultado").textContent = 'valor con descuento del día final: $ ' + resultado
   // return 'valor con descuento del día final: $ ' + resultado 
}

