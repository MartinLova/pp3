/*const express = require('express')

// ejecutamos express y nos retorna funcionalidades
const server = express()

// especificamos puerto donde correra nuestro server 
server.set('port',3000)

//ponemos en marcha nuestro servidor
// en el puerto 3000
server.listen(server.get('port'))

console.log('Servidor corriendo en el puerto:',server.get('port'))*/
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

// nuestra api va a proporcionar los datosen dicjha notacion
server.use(express.json())

server.use(cors())
//server.set('port',process.env.PORT || 3000)

//ponemos en marcha el servidor
//server.listen(server.get('port'))

server.use(morgan('dev'))

server.use('./routers/cliente.route')


// especificamos puerto donde correra nuestro server 
//server.set('port',3000)
server.set('port',process.env.PORT || 3000)


//ponemos en marcha nuestro servidor
// en el puerto 3000
server.listen(server.get('port'))

console.log('servidor corriendo en puerto: ',server.get('port'))