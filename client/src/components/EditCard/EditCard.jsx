import React from 'react'
import style from './style.css'
import { useState } from 'react'
import api from '../../services/api'

const EditCard = ({visibility, usuario}) => {
  console.log(usuario)
  const [nome,setNome] = useState( usuario.nome_usuario)
  const [email,setEmail] = useState( usuario.email_usuario)
  const [tipo,setTipo] = useState( usuario.tipo_usuario)
  const [senha,setSenha] = useState( usuario.senha_usuario)

  console.log(nome)
  console.log(email)

  const handleSubmit = async () =>{
    const data = {
      _id: usuario._id,
      nome_usuario: nome,
      email_usuario: email,
      tipo_usuario: tipo,
      senha_usuario: senha
    }

    const res = await api.put('usuarios.update',data)
    alert(res.status);
    window.location.reload()
  }

  if(usuario){
    return (
      <div 
      className={style.card}
      style={visibility? {visibility: 'visible'}: {visibility:'hidden'}}>EditCard
        <form onSubmit={handleSubmit}>
          <label>Nome:
            <input
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>E-mail:
            <input
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>Tipo
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value={1}>Free</option>
              <option value={2}>Vip</option>
              <option value={3}>Premium</option>
            </select>
          </label>
          <label>Senha:
            <input
              type="password" 
              value={senha}
              onChange={(e) => setSenha( e.target.value)}
            />
          </label>
          <button type= "button"  onClick={()=> handleSubmit()}> Enviar</button>
        </form>
      </div>
    )
  }
  
}

export default EditCard