const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/index')

router(app)

app.listen(port, error => {
  if (error) {
    console.log('deu erro!')
    return
  }

  console.log('subiu aplicação!')
})
