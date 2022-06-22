import React from 'react'
import { useState } from 'react'
import api from '../../../services/api'

const UsuariosCadastrar = () => {
  const [nome,setNome] = useState('')
  const [email,setEmail] = useState('')
  const [tipo,setTipo] = useState(0)
  const [senha,setSenha] = useState('')

  const handleSubmit = async () =>{
    const data = {
      nome_usuario: nome,
      email_usuario: email,
      tipo_usuario: tipo,
      senha_usuario: senha
    }

    console.log("data", data)
  
    const res = await api.post('usuarios',data)
    alert(res.status)
  }

  return (
    <>
      <div>UsuariosCadastrar</div>
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
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button type= "button"  onClick={()=> handleSubmit()}> Enviar</button>
      </form>
    </>
  )
}

export default UsuariosCadastrar