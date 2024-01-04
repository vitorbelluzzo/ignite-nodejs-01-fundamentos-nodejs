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


const server = http.createServer ((request, response) => {
  const { method, url } = request

  if (method === 'GET' && url === '/users') {
    // early return
    return response.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    // early return
    return response.end('Criação de usuário')
  }


  return response.end()

})

server.listen(3333)

//localhost:3333

