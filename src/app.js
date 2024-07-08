// express
import express from 'express'; //do npm i express

const app = express(); //executando o express;
app.use(express.json()); // MiddleWare -> utilizado para ter acesso as requisições e respostas;
// express.json -> executa todas as requisições que chegam como string e são convertidos para json;

const livros = [
    {
        id: 1,
        titulo: "Divertida mente",
    },
    {
        id: 2,
        titulo: "Divertida mente 2",
    }
];

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}


//get -> pega informação existente
app.get("/", (req, res)=>{ // dois parâmetros, a rota e requisição (req) e resposta (res)
    res.status(200).send("Curso de Node.Js"); //recebe o status 200 e envia curso nodeJs. send -< para dados simples
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros); // enviando objetos
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