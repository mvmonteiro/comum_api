import express from "express";
import livros from "./livrosRoutes.js"

const routes = (app) => {
  app.route('/').get( (req, res) => {
    res.status(200).send({titulo: "API de uma aplicação de livros."})
  })

  app.use(express.json(), livros)
}

export default routes