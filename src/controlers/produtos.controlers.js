const Produto = require('../models/produto.model')

//funções que seram usadas nas routes

module.exports = {
    async index(req, res) {
        const prod = await Produto.find();


        res.json(prod);
    },
    async create(req, res) {
        const {
            nome_produto,
            desc_produto,
            qtd_produto,
            preco_produto
        } = req.body;

        let data = {}

        let prod = await Produto.findOne({ nome_produto }) // checa se ja tem esse email cadastrado
        console.log(prod)
        if (!prod) {

            data = {
                nome_produto,
                desc_produto,
                qtd_produto,
                preco_produto
            }
            prod = await Produto.create(data)
            return res.status(200).json(prod)
        } else {
            return res.status(500).json(prod)
        }
    },
    async details(req, res) {
        const { _id } = req.params;
        const prod = await Produto.findOne({ _id });
        res.json(prod);
    },
    async delete(req, res) {
        const { _id } = req.params;
        const prod = await Produto.findByIdAndDelete({ _id })
        return res.json(prod)
    },

    async update(req, res) {
        const {
            _id,
            nome_produto,
            desc_produto,
            qtd_produto,
            preco_produto
        } = req.body

        const data = {
            nome_produto,
            desc_produto,
            qtd_produto,
            preco_produto
        }

        const prod = await Produto.findByIdAndUpdate({ _id }, data, { new: true })

        res.json(prod)
    }

}