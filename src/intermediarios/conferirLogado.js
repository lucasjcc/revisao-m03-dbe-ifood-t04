const jwt = require('jsonwebtoken')
const { senhaToken } = require('../../dadosSensiveis')
const repositorioUsuario = require('../repositorios/usuarios')

const conferirLogado = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ mensagem: "Usuário não logado" })
    }
    try {
        const token = req.headers.authorization.split(" ")[1]
        const { id } = jwt.verify(token, senhaToken)
        const { rows: usuariosLogados, rowCount } = await repositorioUsuario.encontrarUsuarioPeloId(id)
        if (rowCount === 0) {
            return res.status(401).json({ mensagem: "Usuário inválido" })
        }
        req.usuarioLogado = usuariosLogados[0]
        next()
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" })
    }
}

module.exports = conferirLogado