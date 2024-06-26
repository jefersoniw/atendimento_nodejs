const Atendimento = require('../models/Atendimento')

class AtendimentoController {
  async index(req, res) {
    const response = Atendimento.index()

    return response
      .then(atendimentos => res.status(200).json(atendimentos))
      .catch(error => res.status(400).json(error.message))
  }

  async store(req, res) {
    const request = req.body
    const response = Atendimento.store(request)

    return response
      .then(atendimento => res.status(201).json(atendimento))
      .catch(error => res.status(400).json(error.message))
  }

  async show(req, res) {
    const { id } = req.params
    const response = Atendimento.show(id)

    return response
      .then(atendimento => res.status(200).json(atendimento))
      .catch(error => res.status(400).json(error.message))
  }

  async update(req, res) {
    const { id } = req.params
    const request = req.body
    const response = Atendimento.update(request, id)

    return response
      .then(atendimento => res.status(200).json(atendimento))
      .catch(error => res.status(400).json(error.message))
  }

  async delete(req, res) {
    const { id } = req.params
    const response = Atendimento.delete(id)

    return response
      .then(atendimento => res.status(200).json(atendimento))
      .catch(error => res.status(400).json(error.message))
  }
}

module.exports = new AtendimentoController()
