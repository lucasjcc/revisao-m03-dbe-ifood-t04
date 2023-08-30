const { encontrarUsuarioPeloId } = require("../repositorios/usuarios")
const { encontrarGastosPeloId } = require("../repositorios/gastos")

const listarGastos = async (req, res) => {
    try {
        const { id: idUsuario } = req.usuarioLogado
        const { rows: gastosEncontrados } = await encontrarGastosPeloId(idUsuario)
        return res.status(200).json(gastosEncontrados)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" })
    }
}

const listarGasto = (_, res) => {
    try {
        return res.status(501).json("Funcionalidade ainda não implementada")
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" })
    }
}

module.exports = {
    listarGastos,
    listarGasto
}