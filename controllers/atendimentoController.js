const Atendimento = require('../models/Atendimento')

class AtendimentoController {
  index() {
    return Atendimento.index()
  }

  store(request) {
    return Atendimento.store(request)
  }

  show(id) {
    return `Buscando atendimento ${id}`
  }

  update(id) {
    return `Atualizando atendimento ${id}`
  }

  delete(id) {
    return `Excluindo atendimento ${id}`
  }
}

module.exports = new AtendimentoController()
