// // Conectar com o db
// docker ps
// docker exec -it c860e00bdc1b /
//   mongo -u admin -p admin --authenticationDatabase admin

// // Se não existe, ele cria
// show dbs // mostra todos os bancos q pode usar

// use heroes // mudando o contexto para uma db
// show collections // exibir tabelas (coleções)

// // create
// db.heroes.insert({
//   nome:'Shazan',
//   poder:'Avoa',
//   dataNascimento:'1998-01-01'
// })

// // read
// db.heroes.find()
// db.heroes.find().pretty() // formatado


// // Funciona js no terminal
// for(let i=0; i <= 10; i++){
//   db.heroes.insert({
//     nome:`Clone-${i}`,
//     poder:'Multiplicação',
//     dataNascimento:'1998-01-01'

//   })
// }

// db.heroes.count()
// db.heroes.find().limit(3).sort({nome:-1})
// db.heroes.find({}, {poder:1, _id:0})

// // update
// db.heroes.update({_id:ObjectId("5f678d7dddf1ad149f986c97")},
//   {nome:'Mulher Maravilha'}) // Dessa maneira perde outros campos

// // Por segurança, ele só altera um, tem q passar uma flag para alterar todos
// db.heroes.update({_id:ObjectId("5f678d7dddf1ad149f986c9b")},
// {$set: {nome:'Capitã Marvel'}}) // Alterando, somente o nome

// // delete
// db.heroes.remove({}) // remove tudo
