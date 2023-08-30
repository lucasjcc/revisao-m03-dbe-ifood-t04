const conexaoBanco = require("../config/bancoDeDados")

const encontrarGastosPeloId = (idUsuario) => {
    const gastosEncontrados = conexaoBanco.query(`
        SELECT
            *
        FROM 
            gastos
        WHERE
            id_usuario = $1;
    `, [idUsuario])
    return gastosEncontrados
}

module.exports = {
    encontrarGastosPeloId
}