//almacenar datos
const empleado = { //las propiedades siempre van en minúsculas
    nombre: 'Juan',
    apellido: 'Perez',
    dni: '14333222',
    correos:{
        gmail:'jp@gmail.com',
        outlook:'jp@outlook.com',
    }
} 
//FORMA 1
const nombre = empleado.nombre
//const gmail = empleado.correos.gmail
//const outlook = empleado.correos.outlook

//FORMA 2 - DESTRUCTURING OBJECT

const { gmail, outlook} = empleado.correos 
/**  
 * En primer lugar se acceden a las propiedades "gmail" y "outlook"
 * Posteriormente, se inicializan las constantes utilizando el mismo nombre que las propiedades.
 * Y por último se asignan los datos a las constantes mencionadas
 * 
 *  (se crean las constantes y se acceden a las propiedades y se asginan los valores de las propiedades 
 * en las constantes)
*/
const { apellido } = empleado.apellido

document.write(gmail)










