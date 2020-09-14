const ICrud = require('./interfaces/ICrud');

// Nossas estratégias precisam implementar os métodos
class MongoDB extends ICrud {
  constructor(){
    super() // Invocando o constructor do ICrud
  }

  create(item){
    console.log('O item foi salvo em MongoDB')
  }
}

module.exports = MongoDB;