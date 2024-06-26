const conexao = require('../db/conexao')

class Atendimento {
  executeQuery(sql, params = null) {
    return new Promise((resolve, reject) => {
      conexao.query(sql, params, (error, response) => {
        if (error) {
          reject(error)
        }
        resolve(response)
      })
    })
  }

  index() {
    const sql = `select * from atendimentos`
    return this.executeQuery(sql)
  }

  store(req) {
    const sql = `insert into atendimentos set ?`
    return this.executeQuery(sql, req)
  }

  show(id) {
    const sql = `select * from atendimentos where id = ?`
    return this.executeQuery(sql, id)
  }

  update(req, id) {
    const sql = `update atendimentos set ? where id = ?`
    return this.executeQuery(sql, [req, id])
  }

  delete(id) {
    const sql = `delete from atendimentos where id = ?`
    return this.executeQuery(sql, id)
  }
}

module.exports = new Atendimento()
