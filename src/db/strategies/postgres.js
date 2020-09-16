const {Sequelize} = require('sequelize');
const ORM = require('sequelize')
const ICrud = require('./interfaces/ICrud');

class Postgres extends ICrud{
  constructor(){
    super()
    this._driver = null;
    this._heroes = null; // Base de dados de fato
  }

  async isConnected(){
    try {
      await this._driver.authenticate();
      return true;
    } catch (error) {
      console.log('Error', error);
      return false;
    }
  }

  async create(item){
    const {dataValues} = await this._heroes.create(item, {raw:true})
    return dataValues
  }

  async read(item={}){
    return this._heroes.findAll({where:item, raw:true}) 
  }

  async update(id,item){
    return this._heroes.update(item, {where:{id:id}})
  }

  async delete(id){
    const query = id ? {id} : {}
    return this._heroes.destroy({where:query})
  }

 async defineModel(){
    this._heroes = this._driver.define('heroes', {
      id:{
        type: ORM.INTEGER,
        required:true,
        autoIncrement:true,
        primaryKey:true,
      },
      nome: {
        type:ORM.STRING,
        required:true,
      },
      poder:{
        type:ORM.STRING,
        required:true,
      }
    },{
      // Configurações de banco existente
      tableName:'tb_heroes',
      freezeTableName:false,
      timestamps:false
    })

    await this._heroes.sync()
  }
  async connect(){
    // Método privado
    this._driver = new Sequelize('heroes','docker', 'senha',{
      dialect:'postgres',
      host:'localhost',
      quoteIdentifiers:false,
      port:5435,
    })
    await this.defineModel()
  }
}

module.exports = Postgres;