// Arquivos de rotas

import express from "express";
import LivroController from "../controller/livroController.js";

const routes = express.Router();
// Isso é a mesma coisa escrita que o comentário abaixo
routes.get("/livros", LivroController.listarLivros);

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({}); // .find -> conecta no mongodb e acha tudo do livro
//     res.status(200).json(listaLivros); // enviando objetos
// })
    
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivrosPorId);
routes.post("/livros", LivroController.cadastrarLivros);
// post -> cria uma informação nova
// app.post("/livros", (req, res) =>{
//     livros.push(req.body); // objeto requisição, passando o corpo da requisição, nesse caso, o corpo é o id e o título, mas o id não é preciso ser enviado;
//     res.status(201).send("Livro cadastrado com sucesso!") // 201 -> registro criado
// }); usamos o postman para fazer o post

routes.put("/livros/:id", LivroController.atualizarLivro);
// // put -> edita informação
// app.put("/livros/:id", (req, res) =>{
//     const index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo; // altera a informação do titulo do livro;
//     res.status(200).json(livros);
// })


routes.delete("/livros/:id", LivroController.deletarLivro);

// app.delete("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id);
//     livros.splice(index, 1);
//     res.status(200).send("Livro removido com sucesso!")
// })

export default routes;
