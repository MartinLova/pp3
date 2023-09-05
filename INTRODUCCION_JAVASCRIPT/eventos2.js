const imprimir = () => console.log('Repaso de eventos');

/**identificar a traves de su ID 
 * dentro de un documento html en este caso nuestro index
 * por medio de un método que se llama querySelector
 * debemos indicarle el id a buscar siempre anteponiendo el numeral en este caso "btn_repaso"
 * ahora ese boton encotrado lo almaceno en una constante
*/
const boton_repaso = document.querySelector("#btn_repaso");
//escuchar evento a travez de un boton e imprimir
//sería al hacer click sobre el boton btn_repaso, seleccionar la función flecha imprimir
boton_repaso.addEventListener("click",imprimir ); 

//funciones de cálculo
const calcular_multiplicacion = () => {
    const d1 = document.querySelector("#inp_d1").value;
    const d2 = document.querySelector("#inp_d2").value;
    const r = d1 * d2;
    document.querySelector("#inp_resultado").value = r;
}

const btn_producto = document.querySelector("#btn_calcular");
btn_producto.addEventListener("click", calcular_multiplicacion );