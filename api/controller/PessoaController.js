//const database = require('../models');
// const Sequelize = require('sequelize');
const { PessoasServices } = require('../services');
const pessoasServices = new PessoasServices();


class PessoaController {

  static async pegaPessoasAtivas(req, res) {
    try {
      const PessoasAtivas = await pessoasServices.pegaRegistrosAtivos();

      return res.status(200).json(PessoasAtivas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();

      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    try {
      const id = req.params.id;
      const umaPessoa = await pessoasServices.pegaUmRegistro({ id: Number(id) });

      return res.status(200).json(umaPessoa);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa);
      return res.status(200).json(novaPessoaCriada);

    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async atualizaPessoa(req, res) {
    const id = req.params.id;
    const novasInfos = req.body;
    try {
      await pessoasServices.atualizaRegistro(novasInfos, Number(id));
      const pessoaAtualizada = await pessoasServices.pegaUmRegistro({ id: id });

      return res.status(200).json(pessoaAtualizada);


    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async excluiPessoa(req, res) {
    const { id } = req.params;

    try
    {
      await pessoasServices.apagaRegistro(Number(id));

      return res.status(200).json({ mensagem: `id ${id} deletado` })
    }
    catch (erro)
    {
      res.status(500).json(erro.message)
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try
    {
      await pessoasServices.restauraRegistro(Number(id));

      return res.status(200).json({ mensagem: `O id ${id} foi restaurado!`})
    } catch (erro)
    {
      return res.status(500).json(erro.message)
    }
  }

  static async cancelaPessoa(req, res) {
    const { estudanteId } = req.params;
    try
    {
      await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId));

      return res.status(200).json({ message: `matriculas ref. ${estudanteId} canceladas` });

    } catch (erro)
    {
      return res.status(500).json(erro.message);
    }
  }
}
module.exports = PessoaController;
