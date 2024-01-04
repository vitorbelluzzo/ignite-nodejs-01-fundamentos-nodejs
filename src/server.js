import http from 'node:http'

//CommmonJS = require
//ESmodules => import/export

//criando usuario (name, email, senha)

const server = http.createServer ((request, response) => {
  return response.end('Hello World')

})

server.listen(3333)

//localhost:3333

