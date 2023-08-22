const express = require('express')
const { listarGastos } = require('./controladores/gastos')

const rotas = express()

rotas.get('/usuarios/:id/gastos', listarGastos)

module.exports = rotas