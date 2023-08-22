const { encontrarUsuarioPeloId } = require("../banco/usuarios")
const { encontrarGastosPeloId } = require("../banco/gastos")

const listarGastos = (req, res) => {
    const { id } = req.params
    if (isNaN(Number(id))) {
        return res.json({ mensagem: "O id deve ser numérico" })
    }
    const pessoaEncontrada = encontrarUsuarioPeloId(id)
    if (!pessoaEncontrada) {
        return res.json({ mensagem: "Pessoa não encontrada" })
    }
    const gastoEncontrados = encontrarGastosPeloId(id)
    return res.json(gastoEncontrados)
}

module.exports = {
    listarGastos
}