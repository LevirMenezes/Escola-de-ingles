const { Router } = require('express')
const TurmaController = require('../controller/TurmaController.js')

const router = Router()

router
  .get('/turmas', TurmaController.pegaTodasAsTurmas)
  .get('/turmas/:id', TurmaController.pegaUmaTurma)

router
  .post('/turmas', TurmaController.criaTurma)
  .post('/turmas/:id/restaura', TurmaController.restauraTurma)

router
  .put('/turmas/:id', TurmaController.atualizaTurma)

router
  .delete('/turmas/:id', TurmaController.apagaTurma)
module.exports = router
