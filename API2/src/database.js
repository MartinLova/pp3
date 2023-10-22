const mariadb = require('mariadb') 

const parametros = mariadb.createPool({
    host:'Localhost',
    port: 3306,
    user: 'root',
    password:'Tinyna271108',
    database:  'apidb'
})

async function obtener_conexion(){ 
    const conexion = await parametros.getConnection()
    return conexion   
}

module.exports = { obtener_conexion }