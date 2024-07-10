// Ações que podem ser feitas no livro
import livro from '../models/Livro.js';

class LivroController {

    // static -> usar sem instanciar a classe
    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({}); // .find -> conecta no mongodb e acha tudo do livro
            res.status(200).json(listaLivros); // enviando objetos
        } catch(erro){
            res
            .status(500)
            .json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }

    static async listarLivrosPorId(req, res){
        try{
            const id = req.params.id;
            const livroEncontradoPeloId = await livro.findById(id); // .find -> conecta no mongodb e acha tudo do livro
            res.status(200).json(livroEncontradoPeloId); // enviando objetos
        } catch(erro){
            res
            .status(500)
            .json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async cadastrarLivros(req, res){
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).josn({message: "Criado com sucesso", livro: livroCriado});
        } catch (error) {
            res
            .status(500)
            .json({ message: `${error.message} - falha na requisição` });
        }
    }

    static async atualizarLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body); // metodo do mongoose
            res.status(200).json({message: "Livro atualizado!"}); // enviando objetos
        } catch(erro){
            res
            .status(500)
            .json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async deletarLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id); // metodo do mongoose
            res.status(200).json({message: "Livro deletado!"}); // enviando objetos
        } catch(erro){
            res
            .status(500)
            .json({ message: `${erro.message} - falha na exclusão` });
        }
    }

    static async listarLivrosPorEditora(req, res){
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora })
            res.status(200).json(livrosPorEditora); // enviando objetos

        } catch (error) {
            res
            .status(500)
            .json({ message: `${erro.message} - falha na busca` });
        }

    }
};

export default LivroController;