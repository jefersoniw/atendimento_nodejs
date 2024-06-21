const conexao = require('../db/conexao')

class Atendimento {
  index() {
    const sql = `select * from atendimentos`
    return new Promise((resolve, reject) => {
      conexao.query(sql, (error, response) => {
        if (error) {
          reject(error)
        }
        resolve(response)
      })
    })
  }
}

module.exports = new Atendimento()
