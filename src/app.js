// express
import express from 'express'; //do npm i express

const app = express(); //executando o express;

app.get("/", (req, res)=>{
    res.status(200).send("Curso de NodeJs");
})

export default app;