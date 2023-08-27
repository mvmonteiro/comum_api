import autores from "../models/Autor.js"

class autorController {

  // função de READ -> tipo get
    // todos os Autores
  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado)
    } catch (err) {
      res.status(500).json(err);
    }
  }
    // autor por id
  static listarAutorPorId = async (req, res) => {
    try{
      const id = req.params.id;
      const autor = await autores.findById(id);
      res.status(201).send(autor);
    }
    catch(err){
      res.status(400).send({message: `${err.message} - Id do autor não localizado.`});
    }
  }


  // função de CREATE -> tipo post
  static cadastrarAutor = async (req, res) => {
    try{
        let autor = new autores(req.body);
        await autor.save();
        res.status(201).send(autor.toJSON());
    } 
    catch (error){
        res.status(501).send({message: `${error.message} - erro ao cadastrar autor`})
    }
  }


  // função de UPDATE -> tipo put
  static atualizarAutor = async (req, res) => {
    try{
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, {$set: req.body});
      res.status(201).send({message:`Autor com o id: ${id} foi atualizado com sucesso`});
    }
    catch(err){
        res.status(500).send({message:`${err} falha ao atualizar autor`});
    }
}


  // função de DELETE -> tipo delete
  static deletarAutor = async (req, res) => {
    try{
      const id = req.params.id;
      await autores.findByIdAndDelete(id)
      res.status(200).send('Autor removido com sucesso!')
    }
    catch(err){
      res.status(500).send({message: `Nao foi possivel remover o autor - ${err.message}`})
    }
  }

}

export default autorController;