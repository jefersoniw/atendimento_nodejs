const Atendimento = require('../models/Atendimento')

class AtendimentoController {
  index() {
    return Atendimento.index()
  }

  store(request) {
    return Atendimento.store(request)
  }

  show(id) {
    return Atendimento.show(id)
  }

  update(req, id) {
    return Atendimento.update(req, id)
  }

  delete(id) {
    return `Excluindo atendimento ${id}`
  }
}

module.exports = new AtendimentoController()
