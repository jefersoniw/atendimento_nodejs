const express = require('express')
const app = express()
const port = 3000
const appCustom = require('./config/index')

//swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('./swagger.json')

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc))
//swagger

appCustom(app, express)

app.listen(port, error => {
  if (error) {
    console.log('ERROR!')
    return
  }

  console.log('Server ON!')
})
