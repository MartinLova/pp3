const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//accedemos a la funcionalidad de express
const server = express()

//nuestra api va a proporcionar los datos en dicha anotación_otro comentario: aca dejo configurado la notación que manejara el flujo de datos
server.use(express.json())

//permitirá comunicación entre cliente y servidor
server.use(cors())

server.use(morgan('dev')) //morgan es una dependencia de desarrollo que la vamos a usar durante el proceso de construcción de la API, nos informará por consola todas las solicitudes http que vayan surgiendo

//pongo en funcionamiento las rutas existentes dentro de cliente.route
server.use(require('./routes/cliente.route'))

server.set('port',process.env.PORT || 3001)//puesta en marcha indicar el puerto por el cual va a correr el servidor que en este caso es el 3001 o el indicado en la variable de entorno PORT que suele estar disponible en servidores

//iniciando el servidor
server.listen(server.get('port'))

console.log('Servidor corriendo en puerto: ',server.get('port'))
