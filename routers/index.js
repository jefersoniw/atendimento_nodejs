const routeAtendimento = require('./atendimentoRoute')

module.exports = app => {
  app.use(routeAtendimento)
}
