const { Router } = require('express')
const router = Router()

const atendimentoController = require('../controllers/atendimentoController')

//verbos http
/**
 * @swagger
 * /atendimentos:
 *  get:
 *    tags:
 *      - Atendimento
 *    description: Get Atendimentos
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Retorna todos os atendimentos
 *        schema:
 *          $ref: '#/components/schemas/Atendimento'
 *
 */
router.get('/atendimentos', atendimentoController.index)

/**
 * @swagger
 * /atendimentos:
 *  post:
 *    tags:
 *      - Atendimento
 *    description: Post Atendimento
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        description: Corpo da requisição do atendimento
 *        name: Novo Atendimento
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/Atendimento'
 *    responses:
 *      201:
 *        description: Inserindo um atendimento
 *        schema:
 *          $ref: '#/components/schemas/Atendimento'
 *      404:
 *        description: Atendimento não inserido
 */
router.post('/atendimentos', atendimentoController.store)

/**
 * @swagger
 * /atendimento/{id}:
 *  get:
 *    tags:
 *      - Atendimento
 *    description: Get Atendimento
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *    responses:
 *      200:
 *        description: Retorna detalhes de um atendimentos
 *        schema:
 *          $ref: '#/components/schemas/Atendimento'
 *      404:
 *        description: Atendimento não encontrado
 */
router.get('/atendimento/:id', atendimentoController.show)

router.put('/atendimento/:id', atendimentoController.update)

router.delete('/atendimento/:id', atendimentoController.delete)

module.exports = router
