import mongoose, { mongo } from "mongoose";
// mongoose é a biblioteca que faz a integração entre o mongodb e a API

// async -> assíncrona -> conecta com o banco de dados, então é necessário que retorne uma promise
async function conectaDB(){
    mongoose.connect(process.env.DB_CONNECTION_STRING); // desse jeito que se pega a variavel do dotenv

    return mongoose.connection;
}

export default conectaDB;