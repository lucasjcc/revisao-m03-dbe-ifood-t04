const bcrypt = require('bcrypt')

const criptograrSenha = (senha) => {
    const senhaCriptografada = bcrypt.hash(senha, 10)
    return senhaCriptografada
}

module.exports = criptograrSenha