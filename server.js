const express =  require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes')

const port = process.env.PORT || 5000

mongoose.connect("mongodb+srv://hugolc:qweasd123@cluster0.ilbnty4.mongodb.net/curso-basico-mern?retryWrites=true", {
}, (err)=>{
    err ? console.log("TEVE ERRO",err) : console.log("mongodb conectado")
})

const app = express();
app.use(cors()) //declaração para informar quais dominios podem estar consumindo os dados da api
app.use(cookieParser())
app.use(express.json()) //declaração necessária para receber e enviar json
app.use(routes);

app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})
