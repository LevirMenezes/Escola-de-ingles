const database = require('../models')

class Services {
  constructor(nomdeDoModelod) {
    this.nomeDoModelo = nomdeDoModelod
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeDoModelo].findAll({ where: { ...where } });
  }

  async pegaUmRegistro(where) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } });
  }

  async criaRegistro(novoRegistro) {
    return database[this.nomeDoModelo].create(novoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModelo]
      .update(dadosAtualizados,
        { where: { id: id } },
        transacao);
  }

  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return database[this.nomeDoModelo]
      .update(dadosAtualizados,
        { where: { ...where } },
        transacao);
  }

  async apagaRegistro(id) {
    return database[this.nomeDoModelo].destroy(id);
  }

  async restauraRegistro(id) {
    return database[this.nomeDoModelo].restore({ where: { id: id} })
  }

}

module.exports = Services;
