import express from "express";
import AutorController from "../controller/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores)  // quando houver requisicao de get na url /autores -> chama a função listarAutores do controller
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)  // quando houver requisicao de post na url /autores -> chama a função cadastrarAutor do controller
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.deletarAutor);

export default router;