const jwt = require("jsonwebtoken")
const repositorioUsuario = require("../repositorios/usuarios")
const compararSenhas = require("../utils/compararSenhas")
const criptograrSenha = require("../utils/criptografarSenha")
const { senhaToken } = require('../../dadosSensiveis')

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

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })
    }
    try {
        return res.status(501).send("Funcionalidade ainda não disponível")
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" })
    }
}

const logarUsuario = async (req, res) => {
    const { email, senha } = req.body
    if (!email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })
    }
    try {
        const { rows: usuariosEncontrados, rowCount } = await repositorioUsuario.encontrarUsuarioPeloEmail(email)
        if (rowCount === 0) {
            return res.status(404).json({ mensagem: "E-mail ou senha inválidos" })
        }
        const usuarioEncontrado = usuariosEncontrados[0]
        const senhaConfere = await compararSenhas(senha, usuarioEncontrado.senha)
        if (!senhaConfere) {
            return res.status(401).json({ mensagem: "E-mail ou senha inválidos" })
        }
        const token = jwt.sign({ id: usuarioEncontrado.id }, senhaToken, { expiresIn: "15m" })
        return res.status(200).json({ token })
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" })
    }
}

module.exports = {
    atualizarUsuario,
    cadastrarUsuario,
    logarUsuario
}