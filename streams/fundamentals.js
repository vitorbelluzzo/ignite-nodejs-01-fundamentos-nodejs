//netflix e spotify

//conceito de streaming -> transmite/processa dados enquanto esta sendo carregado pelo servidor

//writable streams  -> enviando uma informaçāo aos poucos

//readable streams / writable streams

// streams ->
// process.stdin.pipe(process.stdout) // entrada e saida no terminal

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
  //toda stream readable tem o metodo "_read"
  index = 1
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
  
        this.push(buf)
      } 
      
    }, 1000);
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
    
  }
}

class MultiplyByTenStream extends Writable {
    //toda stream writable tem o metodo "_write"
    _write(chunk, encoding, callback) {
      console.log(Number(chunk.toString()) * 10)
      callback()
    }

 

}


new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())
