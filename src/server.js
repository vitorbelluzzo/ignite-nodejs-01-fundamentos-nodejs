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





const users = []

const server = http.createServer ((request, response) => {
  const { method, url } = request

  console.log(request.headers);

  if (method === 'GET' && url === '/users') {

    return response.setHeader('Content-type', 'application/json').end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
      users.push({
        id: 1,
        name: 'Vitor',
        email: 'vitor@exemplo.com',
      })

    return response.end('Criação de usuário')
  }


  return response.end()

})

server.listen(3333)

//localhost:3333

