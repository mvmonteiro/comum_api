import mongoose from "mongoose";

// definição de um esquema do tipo livro com todos seus atributos
const livrosSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    numeroPaginas: {type: Number}
  }
);

// variavel a ser exportada
const livros = mongoose.model('livros', livrosSchema);

export default livros;