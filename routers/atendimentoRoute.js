const { Router } = require('express')
const router = Router()

const atendimentoController = require('../controllers/atendimentoController')

//verbos http
router.get('/atendimentos', (req, res) => {
  const response = atendimentoController.index()

  response
    .then(atendimentos => res.status(200).json(atendimentos))
    .catch(error => res.status(400).json(error.message))
})

router.post('/atendimentos', (req, res) => {
  const response = atendimentoController.store()
  res.send(response)
})

router.get('/atendimento/:id', (req, res) => {
  const { id } = req.params
  const response = atendimentoController.show(id)
  res.send(response)
})

router.put('/atendimento/:id', (req, res) => {
  const { id } = req.params
  const response = atendimentoController.update(id)
  res.send(response)
})

router.delete('/atendimento/:id', (req, res) => {
  const { id } = req.params
  const response = atendimentoController.delete(id)
  res.send(response)
})

module.exports = router
