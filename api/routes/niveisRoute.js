const { Router } = require('express')
const NivelController = require('../controller/NivelController.js')

const router = Router()

router
  .get('/niveis', NivelController.pegaTodosOsNiveis)
  .get('/niveis/:id', NivelController.pegaUmNivel)

router
  .post('/niveis', NivelController.criaNivel)
  .post('/niveis/:id/restaura', NivelController.restauraNivel)

router
  .put('/niveis/:id', NivelController.atualizaNivel)

router
  .delete('/niveis/:id', NivelController.apagaNivel)

module.exports = router
