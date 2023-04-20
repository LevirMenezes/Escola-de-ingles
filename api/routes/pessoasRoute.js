const { Router } = require('express');
const PessoaController = require('../controller/PessoaController.js');
const MatriculaController = require('../controller/MatriculaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativa', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas/:estudanteId/matricula', MatriculaController.pegaMatricula)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
  .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculaPorTurma)
  .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)

router
  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)
  .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)

router
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)

router
  .delete('/pessoas/:id', PessoaController.excluiPessoa)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)

module.exports = router
