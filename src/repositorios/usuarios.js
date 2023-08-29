const { bancoDeDados } = require("../../bancoDeDados")
const conexaoBanco = require("../config/bancoDeDados")

const encontrarUsuarioPeloId = (idPessoa) => {
    return bancoDeDados.usuarios.find(usuario => usuario.id === Number(idPessoa))
}

const cadastrarUsuario = (dadosDoUsuario) => {
    const { nome, email, senhaCriptografada } = dadosDoUsuario 
    const usuarioCadastrado = conexaoBanco.query(`
        INSERT INTO
	        usuarios (nome, email, senha)
        VALUES
	        ($1, $2, $3)
        RETURNING *
    `, [nome, email, senhaCriptografada])
    return usuarioCadastrado
}

module.exports = {
    encontrarUsuarioPeloId,
    cadastrarUsuario
}