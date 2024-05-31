class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.criarTabelaAtendimento()
  }

  criarTabelaAtendimento() {
    const sql = `
     CREATE TABLE IF NOT EXISTS atendimentos (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      data DATE,
      servico VARCHAR(100),
      cliente VARCHAR(100),
      status ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
     )
    `

    this.conexao.query(sql, error => {
      if (error) {
        console.log('ERRO ao criar tabela atendimentos!')
        console.log(error.message)
        return
      }

      console.log('Tabela criada com sucesso!')
    })
  }
}

module.exports = new Tabelas()
