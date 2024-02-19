import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, req, res, next) {
  //middleware de erro(4 parametros) -> funcao do express que sera executada em toda requisicao feita pela API
  //intercepta qualquer erro que sera lancado/identificado pela aplicacao
  if(erro instanceof mongoose.Error.CastError) {
    res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."});
  } else {
    res.status(500).send({message: "Erro interno de servidor."});
  }
}

export default manipuladorDeErros;