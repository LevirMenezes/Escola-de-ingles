const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');

class MatriculasServices extends Services {
  constructor(options) {
    super('Matriculas')
  }

  async pegaMatriculaPorTurma(turmaId, aggragators) {
    return database[this.nomeDoModelo].findAndCountAll({
      where: {
        turma_id: turmaId,
        status: 'confirmado'
      },
    ...aggragators})
  }

  async pegaTurmasLotadas(lotacaoTurma) {
    return database[this.nomeDoModelo].findAndCountAll({
      where: {
        status: 'confirmado'
      },
      attributes: ['turma_id'],
      group: ['turma_id'],
      having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
    });
  }

  async apagaMatricula(where) {
    return database[this.nomeDoModelo].destroy({ where: {
      ...where
    } });
  }

}

module.exports = MatriculasServices;
