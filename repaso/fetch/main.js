async function solicitar(){
  const lista = await fetch("https://dolarapi.com/v1/dolares") //enpoinds o url  
  //convertir los datos recibidos en una expresión nativa de java script 
  const lista_definitiva = await lista.json()
  lista_definitiva.forEach((element, index) => {
    console.log(`${index+1} - Dólar ${element.nombre} - Compra: $${element.compra} - Venta: $${element.venta} 
        `)
  });
}
/**
 * tenia anotado de clase
 * lista_definitiva.array.forEach(element => {
    console.log(element)
  });
 */