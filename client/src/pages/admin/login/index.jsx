import React, { useState } from 'react'
import api from '../../../services/api'

const Login = () => {

  const [email, setEmail]= useState()
  const [senha, setSenha]= useState()  

  const handleSubmit = async () =>{
    const data = {
        email: email,
        senha: senha
    }

    const res = await api.post('usuarios/login', data)

    if(res.status === 200){
        if(res.data.status === 1){
            // local storage
        }
        else{
            alert(res.data.error)
        }
    }
    else{
        alert("Erro no servidor")
    }
    console.log()
    alert(res.data.status)
  }

  return (
    <>
        <div>Login</div>
        <form>
            <label > Email
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </label>
            <label> Senha
                <input 
                    type="password"
                    value={senha}
                    onChange= { (e)=> setSenha(e.target.value)} 
                />
            </label>
            <button onClick={()=> handleSubmit()}>
                Submit
            </button>
        </form>
    </>
  )
}

export default Login