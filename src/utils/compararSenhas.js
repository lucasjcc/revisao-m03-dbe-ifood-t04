const bcrypt = require('bcrypt')

const compararSenhas = (senha, senhaCriptografada) => {
    return bcrypt.compare(senha, senhaCriptografada)
}

module.exports = compararSenhas