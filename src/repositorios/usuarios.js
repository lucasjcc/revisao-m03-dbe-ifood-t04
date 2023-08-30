const conexaoBanco = require("../config/bancoDeDados")

const encontrarUsuarioPeloId = (id) => {
    const usuarioEncontrado = conexaoBanco.query(`
        SELECT
            id, nome, email
        FROM 
            usuarios
        WHERE
            id = $1;
    `, [id])
    return usuarioEncontrado
}

const encontrarUsuarioPeloEmail = (email) => {
    const usuarioEncontrado = conexaoBanco.query(`
        SELECT
            id, email, senha
        FROM 
            usuarios
        WHERE
            email = $1;
    `, [email])
    return usuarioEncontrado
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
    cadastrarUsuario,
    encontrarUsuarioPeloEmail
}