// Classe de erro
class NotImplementedException extends Error {
  constructor(){
    super("Not Implemented Exception")
  }
}

class ICrud{
  create(item) {
    throw new NotImplementedException()
  }

  read(query){
    throw new NotImplementedException()
  }

  update(id,item){
    throw new NotImplementedException()
  }

  delete(id){
    throw new NotImplementedException()
  }

  // Conexão com o banco de dados
  isConnected(){
   throw new NotImplementedException() 
  }
}

module.exports = ICrud;