//netflix e spotify

//conceito de streaming -> transmite/processa dados enquanto esta sendo carregado pelo servidor

//writable streams  -> enviando uma informaçāo aos poucos

//readable streams / writable streams

// streams ->
process.stdin.pipe(process.stdout) // entrada e saida no terminal

import { Readable } from 'node:stream'

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

new OneToHundredStream().pipe(process.stdout)
