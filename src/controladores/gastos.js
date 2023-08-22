const { encontrarUsuarioPeloId } = require("../banco/usuarios")
const { encontrarGastosPeloId } = require("../banco/gastos")

const listarGastos = (req, res) => {
    const { id } = req.params
    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O id deve ser numérico" })
    }
    const pessoaEncontrada = encontrarUsuarioPeloId(id)
    if (!pessoaEncontrada) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada" })
    }
    const gastosEncontrados = encontrarGastosPeloId(id)
    return res.status(200).json(gastosEncontrados)
}

const listarGasto = (req, res) => {
    const { idPessoa, idGasto } = req.params
    if (isNaN(Number(idPessoa)) || isNaN(Number(idGasto))) {
        return res.status(400).json({ mensagem: "O id deve ser numérico" })
    }
    const pessoaEncontrada = encontrarUsuarioPeloId(idPessoa)
    if (!pessoaEncontrada) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada" })
    }
    const gastosEncontrados = encontrarGastosPeloId(idPessoa)
    if (gastosEncontrados.length === 0) {
        return res.status(404).json({ mensagem: "Gasto não encontrado" })
    }
    const gastoEncontrado = gastosEncontrados.find(gasto => gasto.id === Number(idGasto))
    if (!gastoEncontrado) {
        return res.status(404).json({ mensagem: "Gasto não encontrado" })
    }
    return res.json(gastoEncontrado)
}

module.exports = {
    listarGastos,
    listarGasto
}