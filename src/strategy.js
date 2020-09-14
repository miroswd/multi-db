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
}

// Nossas estratégias precisam implementar os métodos
class MongoDB extends ICrud {
  constructor(){
    super() // Invocando o constructor do ICrud
  }

  create(item){
    console.log('O item foi salvo em MongoDB')
  }
}

class Postgres extends ICrud{
  constructor(){
    super()
  }

  create(item){
    console.log('O item foi salvo em Postgres')
  }
}


class ContextStrategy{
  constructor(strategy){
    // Estratégia do banco de dados
    this._database = strategy;
  }

  // As estratégias que eu passar, devem ser implementados
  // essas opções de return, ex: return this._database.create(item)
  // dentro do constructor
  create(item){
    return this._database.create(item)
  }

  read(item){
    return this._database.read(item)
  }

  update(id,item){
    return this._database.update(id,item)
  }

  delete(id){
    return this._database.delete(id)
  }
}

const contextMongo = new ContextStrategy(new MongoDB());
const contextPostgres = new ContextStrategy(new Postgres())
contextMongo.create()
contextPostgres.create()
contextMongo.read()