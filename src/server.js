import http from 'node:http'

// - criar usuarios
// - listagem usuarios
// - edicao de usuarios
// - remocao de usuarios

// -http
// - metodo http
// - url

// GET. POST, PUT, PATCH, DELETE

// GET => Buscar recurso do back-end
// POST=> Criar uma recurso no backend
// PUT => atualizar um recurso no backend
// PATCH => Atualizar uma info especifica de um recurso no backend
// DELETE => Deletar um recurso do backend

// EXEMPLO: GET /Users -> buscando usuarios no backend
         // POST /Users -> criando usuarios no backend

// Stateful - Stateless

// JSON - JavaScript Object Notation

//HTTP Status Code
// Respostas Informativas (100 – 199)
// Respostas bem-sucedidas (200 – 299)
// Mensagens de redirecionamento (300 – 399)
// Respostas de erro do cliente (400 – 499)
// Respostas de erro do servidor (500 – 599)


const users = []

const server = http.createServer (async (request, response) => {
  const { method, url } = request

  const buffers =  []

  // async/await

  for await (const chunk of request) {
    buffers.push(chunk) 
  }

try {
  request.body = JSON.parse(Buffer.concat(buffers).toString())
} catch {
  request.body = null
}

  if (method === 'GET' && url === '/users') {
    return response
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const {name, email  } = request.body

      users.push({
        id: 1,
        name,
        email,
      })

    return response.writeHead(201).end()
  }


  return response.writeHead(404).end('Not found')

})

server.listen(3333)

//localhost:3333

