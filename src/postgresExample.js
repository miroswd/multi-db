const ORM = require('sequelize')
const {Sequelize} = require('sequelize');
// instala o orm sequelize => yarn add sequelize
// instala o driver do banco de dados, para que seja possível trabalhar => yarn add pg-hstore pg


// passando os dados do bando de dados
const driver = new Sequelize('heroes','docker', 'senha',{
  dialect:'postgres',
  host:'localhost',
  quoteIdentifiers:false,
  port:5435,
})


async function main(){
  try {
    const Heroes = driver.define('heroes', {
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

    await Heroes.sync()
    // await Heroes.create({
    //   nome:"Homem-aranha",
    //   poder:"Habilidades aranha"
    // })

    // raw formata nos principais campos 
    const result = await heroes.findAll({raw:true})
    console.log('result',result)
  } catch (error) {
    console.log('ERRO',error)
  }
  
}

main()