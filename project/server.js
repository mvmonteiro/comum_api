// importa do app com o express
import app from './src/app.js'
// definição da porta que "escuta" a requisição -> local
const port = process.env.PORT || 3000; // a porta vem de algum servidor de uma plataforma ou localmente

// definição da porta em que o servidor vai funcionar -> agora com o app importado
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})