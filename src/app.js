// express
import express from 'express'; //do npm i express

const app = express(); //executando o express;
app.use(express.json()); // MiddleWare -> utilizado para ter acesso as requisições e respostas;
// express.json -> executa todas as requisições que chegam como string e são convertidos para json;

const livros = [
    {
        id: 1,
        título: "Divertida mente",
    },
    {
        id: 2,
        título: "Divertida mente 2",
    }
];

app.get("/", (req, res)=>{ // dois parâmetros, a rota e requisição (req) e resposta (res)
    res.status(200).send("Curso de Node.Js"); //recebe o status 200 e envia curso nodeJs. send -< para dados simples
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros); // enviando objetos
})

app.post("/livros", (req, res) =>{
    livros.push(req.body); // objeto requisição, passando o corpo da requisição, nesse caso, o corpo é o id e o título, mas o id não é preciso ser enviado;
    res.status(201).send("Livro cadastrado com sucesso!") // 201 -> registro criado
})

export default app;