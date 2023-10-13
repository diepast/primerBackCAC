const express = require('express')
const rutasRouter = express.Router()

const rutasController = require ('../controllers/rutasController')

rutasRouter.get( '/rutas' , rutasController.getRutas )
rutasRouter.post( '/rutas' , rutasController.addRutas )

module.exports = rutasRouter