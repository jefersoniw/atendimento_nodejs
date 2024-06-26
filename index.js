const express = require('express')
const app = express()
const port = 3000
const appCustom = require('./config/index')

appCustom(app, express)

app.listen(port, error => {
  if (error) {
    console.log('ERROR!')
    return
  }

  console.log('Server ON!')
})
