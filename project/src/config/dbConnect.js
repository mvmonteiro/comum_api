import mongoose from "mongoose";

// conexão da aplicação com o banco em nuvem a parti da string do atlas
mongoose.connect("mongodb+srv://mvmonteiro:123@cluster0.d8fvaat.mongodb.net/alura-node-test?");

// variável que permite a utilização do db já conectado
let db = mongoose.connection;

export default db;