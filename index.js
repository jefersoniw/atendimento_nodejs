const express = require('express')
const app = express()
const port = 3000
const appCustom = require('./config/index')

//swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

var swaggerDefinition = {
  info: {
    title: 'CRUD Atendimentos Swagger',
    version: '1.0.00',
    description: 'Documentação de Api - CRUD Atendimento NodeJS'
  },
  components: {
    schemas: require('./schemas.json')
  }
}

var options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routers/*.js']
}

var swaggerSpec = swaggerJsDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
//swagger

appCustom(app, express)

app.listen(port, error => {
  if (error) {
    console.log('ERROR!')
    return
  }

  console.log('Server ON!')
})
