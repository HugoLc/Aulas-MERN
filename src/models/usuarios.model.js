const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

//criando um schema para salvar dados no mongodb

const DataSchema = new mongoose.Schema({
    nome_usuario:String,
    email_usuario:String,
    tipo_usuario:{
        type: Number,
        default: 1
    },
    senha_usuario:String
},{
    timestamps:true
})


const usuarios = mongoose.model("Usuarios",DataSchema)

DataSchema.pre('save',function(next){
    if(!this.isModified('senha_usuario')){
        return next()
    }
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario,10)
    next()
})

DataSchema.methods.isCorrectPassword = function(password, callback){
    bycript.compare(password,this.senha_usuario, function(err,same){
        if(err){
            callback(err);
        }
        else{
            callback(err, same)
        }
    })
}

module.exports = usuarios;