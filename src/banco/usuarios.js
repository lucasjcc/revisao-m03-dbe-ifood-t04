const { bancoDeDados } = require("../../bancoDeDados")

const encontrarUsuarioPeloId = (idPessoa) => {
    return bancoDeDados.usuarios.find(usuario => usuario.id === Number(idPessoa))
}

module.exports = {
    encontrarUsuarioPeloId
}