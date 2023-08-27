import livros from "../models/Livro.js"

class LivroController {

  // função de READ -> tipo get
    // todos os livros
  static listarLivros = async (req, res) => {
    try {
      const livrosResultado = await livros
        .find()
        .populate('autor')
        .exec();
      res.status(200).json(livrosResultado)
    } catch (err) {
      res.status(500).json(err);
    }
  }
    // livro por id
  static listarLivroPorId = async (req, res) => {
    try{
      const id = req.params.id;
      const livro = await livros
        .findById(id)
        .populate('autor', 'nome')
        .exec();
      res.status(201).send(livro);
    }
    catch(err){
      res.status(400).send({message: `${err.message} - Id do livro não localizado.`});
    }
  }


  // função de CREATE -> tipo post
  static cadastrarLivro = async (req, res) => {
    try{
        let livro = new livros(req.body);
        await livro.save();
        res.status(201).send(livro.toJSON());
    } 
    catch (error){
        res.status(501).send({message: `${error.message} - erro ao cadastrar livro`})
    }
  }


  // função de UPDATE -> tipo put
  static atualizarLivro = async (req, res) => {
    try{
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, {$set: req.body});
      res.status(201).send({message:`Livro com o id: ${id} foi atualizado com sucesso`});
    }
    catch(err){
        res.status(500).send({message:`${err} falha ao atualizar livro`});
    }
}


  // função de DELETE -> tipo delete
  static deletarLivro = async (req, res) => {
    try{
      const id = req.params.id;
      await livros.findByIdAndDelete(id)
      res.status(200).send('Livro removido com sucesso!')
    }
    catch(err){
      res.status(500).send({message: `Nao foi possivel remover o livro - ${err.message}`})
    }
  }

}

export default LivroController;