import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema( // como se fosse a interface do typescript
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { type: mongoose.Schema.Types.String, required: true },
        editora: { type: String },
        preco: { type: Number },
        paginas: { type: Number },
        autor: autorSchema  // referenciando ao autor;
    }, { versionKey: false }); // versionKey -> relacionado ao mongodb
    // Schema é um objeto de configuração que define a estrutura e as propriedades de um objeto

    const livro = mongoose.model("livros", livroSchema); // nesse caso o livro é um objeto que deve receber essas chaves definas no livroSchema;

    // no typescript criariamos a interface Livro {id: Number, titulo: string, editora: string, preco: number, paginas number};
    // const livros: Livro;

    export default livro;