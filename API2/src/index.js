const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

//nuestra api va a proporcionar los datos en dicha anotación
server.use(express.json())

server.use(cors())

server.use(morgan('dev'))

server.use(require('./routes/cliente.route'))

server.set('port',process.env.PORT || 3001)

//ponemos en marcha el servidor
server.listen(server.get('port'))

console.log('Servidor corriendo en puerto: ',server.get('port'))
