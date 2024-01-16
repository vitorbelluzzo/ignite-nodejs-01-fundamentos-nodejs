import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

// 3 formas do frontend enviar informação para o backend:

// Query parameters: enviar pela url -> url stateful (serve para enviar infos nao sensiveis)
// Route parameters: Identificação de recurso
// request body: envio de informação de um formulário


const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if (route) {
    const routeParams = request.url.match(route.path)

    const { query, ...params } = routeParams.groups
    
    request.params = params
    request.query = query ? extractQueryParams(query) : {}

    return route.handler(request, response)
  }

  return response.writeHead(404).end('Not found')

})

server.listen(3333)