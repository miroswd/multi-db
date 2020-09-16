const ICrud = require('../interfaces/ICrud')

class ContextStrategy extends ICrud{
  constructor(strategy){
    // Estratégia do banco de dados
    super() // Toda vez q for derivar de uma classe, é necessário invocar
    // o Constructor dela, antes
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

  connect(){
    return this._database.connect()
  }

  // Conexão com o banco de dados
  isConnected(){
    return this._database.isConnected()
   }
}

module.exports = ContextStrategy;