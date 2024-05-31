const { Router } = require('express')
const router = Router()

//verbos http
router.get('/atendimentos', (req, res) => {
  res.send('Todos atendimentos!')
})
router.post('/atendimentos', (req, res) => {
  res.send('Criando um atendimento!')
})
router.get('/atendimento/:id', (req, res) => {
  const { id } = req.params
  res.send(`Detalhes do atendimento ${id}!`)
})
router.put('/atendimento/:id', (req, res) => {
  const { id } = req.params
  res.send(`Atualizando o atendimento ${id}!`)
})
router.delete('/atendimento/:id', (req, res) => {
  const { id } = req.params
  res.send(`Apagando o atendimento ${id}!`)
})

module.exports = router
