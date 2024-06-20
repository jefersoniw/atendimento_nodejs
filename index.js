const express = require('express')
const app = express()
const port = 3000

const router = require('./routers/index')
router(app)

const conexao = require('./db/conexao')
const tabelas = require('./db/tabelas')
tabelas.init(conexao)

app.listen(port, error => {
  if (error) {
    console.log('ERROR!')
    return
  }

  console.log('Server ON!')
})
