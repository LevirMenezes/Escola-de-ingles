const { Router } = require('express');
const PessoaController = require('../controller/PessoaController.js');

const router = Router();

router
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
  .delete('/pessoas/:id', PessoaController.excluiPessoa)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)

module.exports = router
