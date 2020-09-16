const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy')


const context = new Context(new Postgres());
const MOCK_HEROI_CADASTRAR = {
  nome:'Homem de Ferro',
  poder:'Tecnologia'
} // Objeto fixo

const MOCK_HEROI_UPDATE = {
  nome:'Ajax',
  poder:'Metamorfose'
} // Objeto fixo

describe('Postgres Strategy',function () {
  this.timeout(Infinity) // Leve o tempo q for
  this.beforeAll(async function() {
     await context.connect()
     await context.delete()
     await context.create(MOCK_HEROI_UPDATE)
  })

  it('PostgresSQl connection', async function () {
    const result = await context.isConnected()
    assert.equal(result, true)
  })
  it('Deve cadastrar um herói', async function () {
    const result = await context.create(MOCK_HEROI_CADASTRAR)
    delete result.id
    assert.deepEqual(result,MOCK_HEROI_CADASTRAR)
  })
  it('listar heróis', async function(){
    const [result] = await context.read({nome:MOCK_HEROI_CADASTRAR.nome}); // Pegando a primeira posição
    delete result.id
    assert.deepEqual(result,MOCK_HEROI_CADASTRAR)
  })
  it('atualizar dados do herói', async function(){
    const [itemUpdate] = await context.read({nome:MOCK_HEROI_UPDATE.nome})
    const newHero = {
      ...MOCK_HEROI_UPDATE,
      nome:'Mística'
    }
    const [result] = await context.update(itemUpdate.id,newHero)
    const [itemUpdated] = await context.read({id:itemUpdate.id})
    assert.deepEqual(result,1)
    delete itemUpdated.id
    assert.deepEqual(itemUpdated, newHero)
  })
  it('Remover herói por id', async function(){
    const [item] = await context.read({});
    const result = await context.delete(item.id)
    assert.deepEqual(result,1)
  })
})