// biblioteca nativa do node
// protocolo comum na internet de comunicação
// para que nosso site acesse e mostre os dados na tela
// cliente (computador) manda uma requisição e o servidor responde
import http from "http";
// import express from 'express';
// import LivroController from '../controllers/livroController.js';

// criaremos um servidor local que simula um servidor da internet

const PORT = 3000; // uppercase para passar informação fixa;
const rotas = { // rotas que podemos acessar
    "/": "Curso", 
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores",
}

const server = http.createServer((req, res) =>{ // função de callback que recebe como parâmetros requisição (req) e resposta (res)
    res.writeHead(200, {"Content-type": "text/plain"}); // cabeçalho da resposta -> recebe como parâmetros a resposta da requisição (200 -> sucesso) e o tipo conteúdo da resposta
    res.end(rotas[req.url]); // O conteúdo por si só
}); 

// server variável que guarda todas as informações sobre o servidor
server.listen(PORT, () => {
    console.log("Escutando servidor!");
}); // 3000 porta lógica onde acontece a conexão com o servidor

// const express = require('express');
// const LivroController = require('../controllers/livroController.js');