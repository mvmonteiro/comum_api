import express from "express";
import LivroController from "../controller/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)  // quando houver requisicao de get na url /livros -> chama a função listarLivros do controller
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)  // quando houver requisicao de post na url /livros -> chama a função cadastrarLivro do controller
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro);

export default router;