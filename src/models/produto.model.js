const mongoose = require('mongoose');

//criando um schema para salvar dados no mongodb

const DataSchema = new mongoose.Schema({
    nome_produto: String,
    desc_produto: String,
    qtd_produto: Number,
    preco_produto: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
})


const produtos = mongoose.model("Produtos", DataSchema)

module.exports = produtos;