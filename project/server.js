// constante com o módulo nativo http
const http = require("http")
// definição da porta que "escuta" a requisição -> local
const port = 3000;

// "criando" o servidor que representa as requisições e respostas
const server = http.createServer( (req, res) => {
  res.writeHead(200, {'Contet-Type': 'text/plain'});  // resposta devolvida em formato de texto
  res.end('Curso de node');                           // mensagem enviada
})

// definição da porta em que o servidor vai funcionar
server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})