// express
import express from 'express'; //do npm i express
import conectaDB from './config/dbConnect.js';
import livro from './models/Livro.js';



const conexao = await conectaDB(); // instancia do banco de dados

// error é uma string que vem do mongoose
conexao.on("error", (error) =>{
    console.error("Erro de conexão", error);
}); // on -> relacionado a eventos -> eventos de conexão (aberta, erro)
conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
}); // fazendo conexão

const app = express(); //executando o express;
app.use(express.json()); // MiddleWare -> utilizado para ter acesso as requisições e respostas;
// express.json -> executa todas as requisições que chegam como string e são convertidos para json;

// não será mais necessário

// const livros = [
//     {
//         id: 1,
//         titulo: "Divertida mente",
//     },
//     {
//         id: 2,
//         titulo: "Divertida mente 2",
//     }
// ];

// function buscaLivro(id){
//     return livros.findIndex(livro => {
//         return livro.id === Number(id);
//     })
// }


//get -> pega informação existente
app.get("/", (req, res)=>{ // dois parâmetros, a rota e requisição (req) e resposta (res)
    res.status(200).send("Curso node JS"); //recebe o status 200 e envia curso nodeJs. send -< para dados simples
})

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({}); // .find -> conecta no mongodb e acha tudo do livro
    res.status(200).json(listaLivros); // enviando objetos
})

// pegar um livro especifico
// /: => informaçãp variável
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id); // params (parametro), id -> (parametro da rota (:id)) 
    res.status(200).json(livros[index]);
})

// post -> cria uma informação nova
app.post("/livros", (req, res) =>{
    livros.push(req.body); // objeto requisição, passando o corpo da requisição, nesse caso, o corpo é o id e o título, mas o id não é preciso ser enviado;
    res.status(201).send("Livro cadastrado com sucesso!") // 201 -> registro criado
}); // usamos o postman para fazer o post

// put -> edita informação
app.put("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo; // altera a informação do titulo do livro;
    res.status(200).json(livros);
})

// delete

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!")
})
export default app;

// mongodb+srv://admin:admin123@cluster0.sosuxft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0