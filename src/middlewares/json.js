export async function json(request, response) {
  const buffers = []

  // async/await

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    request.body = null
  }

  response.setHeader('Content-type', 'application/json')

}