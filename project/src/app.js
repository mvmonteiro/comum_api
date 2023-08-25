import express from "express";

// "criando" o contexto do app para poder utilizar as funções advindas do express
const app = express();
// interpretação do que vem por POST ou PUT
app.use(express.json());

const livros = [
  {"id": 1, "titulo": "Harry Potter"},
  {"id": 2, "titulo": "Batman"}
]

// função que localiza o livro pelo id
  function buscaLivro(id) {
    return livros.findIndex( (livro) => livro.id == id);
  }

// requisições do tipo read
app.get('/', (req, res) => {                      // requisição do usuário na url / (localhost)
  res.status(200).send('Api implementation')      // resposta com o código 200 (sucesso) e mensagem
})

app.get('/livros', (req, res) => {                // requisição do usuário na url /livros
  res.status(200).json(livros)                    // resposta com o código 200 (sucesso) e mensagem em formato json com a lista de objetos livros
})

app.get('/livros/:id', (req, res) => {                     // print de livro por um id
  let index = buscaLivro(req.params.id);                   // encontra o id do livro na lista
  
  if(index >= 0) {
    res.status(200).json(livros[index]);                          // como resposta printa o livro do id
  }
  else{
    res.status(400).send("index not found");
  }                              
})

// requisições do tipo create
app.post('/livros', (req, res) => {
  livros.push(req.body);                                    // pega o body da requisição e coloca na lista de livros
  res.status(201).send('Livro cadastrado com sucesso');     // código de criado com sucesso e mensagem
})

// requisições do tipo update
app.put('/livros/:id', (req, res) => {                     // atualização de conteúdo a partir do id 
  let index = buscaLivro(req.params.id);                   // encontra o id do livro na lista
  
  if(index >= 0) {
    livros[index].titulo = req.body.titulo                 // altera o titulo do livro no indice encontrado pelo titulo do body da requisição

    res.status(200).json(livros);                          // como resposta printa a lista de livros
  }
  else{
    res.status(400).send("index not found");
  }                              
})

// requisção delete
app.delete('/livros/:id', (req, res) => {                     
  let {id} = req.params;
  let index = buscaLivro(id);
  
  if(index >= 0) {
    livros.splice(index, 1);

    res.status(200).send(`O livro ${id} foi removido com sucesso.`);                          
  }
  else{
    res.status(400).send("index not found");
  }                              
})


// outros arquivos vao conseguir ler o app
export default app