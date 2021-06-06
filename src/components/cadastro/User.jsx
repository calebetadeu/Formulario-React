import React from 'react'
import * as S from './UserStyle'


const User=(props)=>{
  return (
        <S.UsuariosCadastro>
       
       <div className="button__remover"  > 
       
         <button  onClick={props.removerUsuario}>&times;</button></div>
         
      <div className="container__cadastrado" >
       
        <ul>
            <li > <strong>Nome:</strong> {props.usuario.nome} </li>
             <li> <strong>Email:</strong> {props.usuario.email} </li>
               <li> <strong>Celular:</strong> {props.usuario.celular}  </li>
        </ul>
       
       
      </div>
      
     
      </S.UsuariosCadastro>
  )
}

export default User;