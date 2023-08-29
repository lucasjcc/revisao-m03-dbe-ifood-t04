const repositorioUsuario = require("../repositorios/usuarios")
const criptograrSenha = require("../utils/criptografarSenha")

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })
    }
    try {
        const senhaCriptografada = await criptograrSenha(senha)
        const dadosDoUsuario = { nome, email, senhaCriptografada }
        const { rows: usuariosCadastrados } = await repositorioUsuario.cadastrarUsuario(dadosDoUsuario)
        const usuarioCadastro = usuariosCadastrados[0]
        delete usuarioCadastro.senha
        return res.status(201).json(usuarioCadastro)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" })
    }
}

const atualizarUsuario = (req, res) => {
    const { id } = req.params
    const { nome, email, senha } = req.body
    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O id deve ser numérico" })
    }
    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })
    }
    const usuarioEncontrado = repositorioUsuario.encontrarUsuarioPeloId(id)
    if (!usuarioEncontrado) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada" })
    }

    return res.json(usuarioEncontrado)
}

module.exports = {
    atualizarUsuario,
    cadastrarUsuario
}