import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed);

    callback(null, Buffer.from(String(transformed)))
    
  }
}

//req -> readableStream = ler dados da requisição
//res -> writableStream = escrever dados para enviar para o front

const server = http.createServer((req,res) => {
  return req
    .pipe(new InverseNumberStream())
    .pipe(res)
})


server.listen(3334)