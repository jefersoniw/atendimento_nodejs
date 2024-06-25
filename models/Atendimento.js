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

  store(req) {
    const sql = `insert into atendimentos set ?`
    return new Promise((resolve, reject) => {
      conexao.query(sql, req, (error, response) => {
        if (error) {
          reject(error)
        }
        resolve(response)
      })
    })
  }
}

module.exports = new Atendimento()
