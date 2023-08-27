import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

// "criando" o contexto do app para poder utilizar as funções advindas do express
const app = express();
// interpretação do que vem por POST ou PUT
app.use(express.json());

// utilização das rotas
routes(app);

// conexao com o banco
db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso!')
})

// outros arquivos vao conseguir ler o app
export default app