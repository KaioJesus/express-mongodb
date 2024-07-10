// ponto de entrada das rotas
import express from "express";
import livros from "./livroRoutes.js"
import autores from "./autorRoutes.js";

// agrupar todas as rotas que receberemos

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
    app.use(express.json(), livros, autores) //incluir middlewares
}

export default routes;