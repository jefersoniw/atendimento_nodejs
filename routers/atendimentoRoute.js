const { Router } = require('express')
const router = Router()

const atendimentoController = require('../controllers/atendimentoController')

//verbos http
router.get('/atendimentos', atendimentoController.index)

router.post('/atendimentos', atendimentoController.store)

router.get('/atendimento/:id', atendimentoController.show)

router.put('/atendimento/:id', atendimentoController.update)

router.delete('/atendimento/:id', atendimentoController.delete)

module.exports = router
