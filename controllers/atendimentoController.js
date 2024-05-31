class AtendimentoController {
  index() {
    return `Bucando todos os atendimentos...`
  }

  store() {
    return `Criando atendimento...`
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
