const { bancoDeDados } = require("../../bancoDeDados")

const encontrarGastosPeloId = (idPessoa) => {
    return bancoDeDados.gastos.filter(gasto => gasto.id_usuario === Number(idPessoa))
}

module.exports = {
    encontrarGastosPeloId
}