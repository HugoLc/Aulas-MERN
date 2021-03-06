import React from 'react'
import api from '../../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'
import EditCard from '../../../components/EditCard/EditCard'

const UsuariosListagem = () => {
  const [listUsuarios, setListUsuarios] = useState([])
  const [toggleEditCard, setToggleEditCard] = useState(false)
  const [userToEdit, setUserToEdit] = useState()

  const getUsuarios = async () =>{
    const {data} = await api.get('usuarios')
    console.log(data)
    setListUsuarios(data)
  }

  const handleExcluir = async (id)=>{
    const res = await api.delete(`usuarios.delete/${id}`)
    getUsuarios()
    alert(res.status)
  }

  const handleEditar = (usuario)=>{
    setUserToEdit(usuario);
    setToggleEditCard(true)
  }

  useEffect(() => {
    getUsuarios()
  }, [])
  

  return (
    <>
      <div>UsuariosListagem</div>
      <ul>
        {listUsuarios.map((usuario, idx)=>{
          return (
            <li key={idx} style={{margin: '10px 0px', border: '1px solid black'}}>
              <ul>
                <li>Nome: {usuario.nome_usuario}</li>
                <li>Email: {usuario.email_usuario}</li>
                <li>Tipo: {usuario.tipo_usuario}</li>
                <button onClick={() => handleEditar(usuario)}>Editar</button>
                <button onClick={()=> handleExcluir(usuario._id)}>Excluir</button>
              </ul>
            </li>
          )
        })}
      </ul>
      {userToEdit && <EditCard visibility={toggleEditCard} usuario={userToEdit}/>}
    </>
  )
}

export default UsuariosListagem