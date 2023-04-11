const database = require('../models');

class TurmaController {

  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaTurma(req, res) {
    try
    {
      const id = req.params.id;
      const umaTurma = await database.Turmas.findOne({ where: { id: id } });

      return res.status(200).json(umaTurma);
    } catch (erro)
    {
      return res.status(500).json(erro.message);
    }
  }

  static async criaTurma(req, res) {
    const novaTurma = req.body;
    try
    {
      const novaTurmaCriada = await database.Turmas.create(novaTurma);

      return res.status(200).json(erro.message);
    } catch (erro)
    {
      return res.status(500).json(erro.message);
    }
  }

  static async atualizaTurma(req, res) {
    const id = req.params.id;
    const InfoAtualizada = req.body;
    try
    {
      await database.Turmas.update(InfoAtualizada, { where: { id: Number(id) } });
      const turmaAtualizada = await database.Turmas.findOne({ where: { id: id } });
      return res.status(200).json(turmaAtualizada);
    } catch (erro)
    {
      return res.status(500).json(erro.message);
    }
  }

  static async apagaTurma(req, res) {
    const id = req.params.id;
    try
    {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (erro)
    {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = TurmaController;
