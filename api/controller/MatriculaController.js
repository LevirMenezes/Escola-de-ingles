const { MatriculasServices } = require('../services');
const matriculasServices = new MatriculasServices()

class MatriculaController {

  static async pegaMatricula(req, res) {
    const { estudanteId } = req.params;
    try {
      const matriculas = await matriculasServices.pegaTodosOsRegistros({ estudante_id: Number(estudanteId) })

      return res.status(200).json(matriculas)
    } catch (erro) {
      return res.status(500).json(erro.message)
    }
  }

  static async pegaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const umaMatricula = await matriculasServices.pegaUmRegistro({ id: Number(matriculaId), estudante_id: Number(estudanteId) });

      res.status(200).json(umaMatricula);
    } catch (erro) {
      return res.status(500).json(erro.message)
    }
  }

  static async pegaMatriculaPorTurma(req, res) {
    const { turmaId } = req.params;
    try {
      const todasAsMatriculas = await matriculasServices.pegaMatriculaPorTurma(Number(turmaId), { limit: 20, order: [['estudante_id', 'DESC']] });

      return res.status(200).json(todasAsMatriculas)
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async pegaTurmasLotadas(req, res) {
    const lotacaoTurma = 2;
    try {
      const turmasLotadas = await matriculasServices.pegaTurmasLotadas(lotacaoTurma);

      return res.status(200).json(turmasLotadas.count)
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await matriculasServices.criaRegistro(novaMatricula);

      return res.status(200).json(novaMatriculaCriada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const infoAtualizada = req.body;
    try {
      await matriculasServices.atualizaRegistros(infoAtualizada, { id: Number(matriculaId), estudante_id: Number(estudanteId) });

      const matriculaAtualizada = await matriculasServices.pegaUmRegistro({ id: Number(matriculaId) });

      return res.status(200).json(matriculaAtualizada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async apagaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try
    {
      await matriculasServices.apagaMatricula({ id: Number(matriculaId), estudante_id: Number(estudanteId)});

      return res.status(200).json({ mensagem: `O id ${matriculaId} foi deletado!` });
    } catch (erro)
    {
      res.status(500).json(erro.message);
    }
  }

  static async restauraMatricula(req, res) {
    const { matriculaId } = req.params;
    try
    {
      await matriculasServices.restauraRegistro(Number(matriculaId));

      const matriculaAtualizada = await matriculasServices.pegaUmRegistro({ id: Number(matriculaId) });

      return res.status(200).json(matriculaAtualizada);
    } catch (erro)
    {
      return res.status(500).json(erro.message);
    }
  }

}

module.exports = MatriculaController;

