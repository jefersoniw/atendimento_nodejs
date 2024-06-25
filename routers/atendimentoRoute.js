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
  const request = req.body
  const response = atendimentoController.store(request)

  response
    .then(atendimento => res.status(201).json(atendimento))
    .catch(error => res.status(400).json(error.message))
})

router.get('/atendimento/:id', (req, res) => {
  const { id } = req.params
  const response = atendimentoController.show(id)

  response
    .then(atendimento => res.status(200).json(atendimento))
    .catch(error => res.status(400).json(error.message))
})

router.put('/atendimento/:id', (req, res) => {
  const { id } = req.params
  const request = req.body
  const response = atendimentoController.update(request, id)

  response
    .then(atendimento => res.status(201).json(atendimento))
    .catch(error => res.status(400).json(error.message))
})

router.delete('/atendimento/:id', (req, res) => {
  const { id } = req.params
  const response = atendimentoController.delete(id)
  res.send(response)
})

module.exports = router
