const Usuario = require('../models/usuarios.model')
const jwt = require('jsonwebtoken')
const secret = 'segredo'


//funções que seram usadas nas routes

module.exports = {
    async index(req, res) {
        const user = await Usuario.find();


        res.json(user);
    },
    async create(req, res) {
        const {
            nome_usuario,
            email_usuario,
            tipo_usuario,
            senha_usuario
        } = req.body;

        let data = {}

        let user = await Usuario.findOne({ email_usuario }) // checa se ja tem esse email cadastrado
        console.log(user)
        if (!user) {

            data = {
                nome_usuario,
                email_usuario,
                tipo_usuario,
                senha_usuario
            }
            user = await Usuario.create(data)
            return res.status(200).json(user)
        } else {
            return res.status(500).json(user)
        }
    },
    async details(req, res) {
        const { _id } = req.params;
        const user = await Usuario.findOne({ _id });
        res.json(user);
    },
    async delete(req, res) {
        const { _id } = req.params;
        const user = await Usuario.findByIdAndDelete({ _id })
        return res.json(user)
    },

    async update(req, res) {
        const {
            _id,
            nome_usuario,
            email_usuario,
            tipo_usuario,
            senha_usuario
        } = req.body

        const data = {
            nome_usuario,
            email_usuario,
            tipo_usuario,
            senha_usuario
        }

        const user = await Usuario.findByIdAndUpdate({ _id }, data, { new: true })

        res.json(user)
    },


    async login(req, res) {
        const {email, senha} = req.body;
        Usuario.findOne({email_usuario: email, tipo_usuario:3}, function(err, user){
            if(err){
                console.log(err);
                res.status(200).json({error: "erro no servidor. tente novamente"})
            }
            else if(!user){
                res.status(200).json({status:2, error: "email não encontrado"})                
            }
            // MELHORAR AUTENTICAÇÃO. DADOS CRIPTOGRAFADOS
            else if(user && user.senha_usuario !== senha){
                res.status(200).json({error: "senha não confere"})
            }
            else{
                const payload = {email};
                const token = jwt.sign(payload, secret, {
                    expiresIn: '24h'
                })
                res.cookie('token', token, {httpOnly:true})
                res.status(200).json({
                    status:1,
                    auth:true,
                    token:token, 
                    id_client: user._id,
                    user_name:user.nome_usuario
                })
            }
        })
    },

    async checktoken(req,res){
        const token = req.body.token || req.query.token || req.cookies.token || req.headers[x-access-token]
        if(!token){
            res.json({status:401, msg:'nao autorizado, token inexistente'})
        }
        else{
            jwt.verify(token, secret, function(err, decoded){
                if(err){
                    res.json({status:401, msg:'nao autorizado, token invalido'})
                }
                else{
                    res.json({status:200})
                }
            })
        }
    }
}