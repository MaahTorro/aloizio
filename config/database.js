const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb+srv://userAdmin:qweasdzxc1234@fiaptecnico.5oane.mongodb.net/crud')
    //conexao atlaas
    var atlas = await mongoose.connect('mongodb+srv://useradmin123:230205@fiaptec.n8xny.mongodb.net/test')
}

module.exports = conexao