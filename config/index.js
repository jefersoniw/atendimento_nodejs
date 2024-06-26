const router = require('../routers/index')
const conexao = require('../db/conexao')
const tabelas = require('../db/tabelas')

module.exports = (app, express) => {
  router(app, express)
  tabelas.init(conexao)
}
