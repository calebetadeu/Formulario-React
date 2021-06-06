
import React, { Component } from 'react'
import * as S from './TelaUsuarioStyle'



class TelaUsuario extends Component {
        constructor(props){
            super(props)
            this.state={

                 usuario:{ nome:'',celular:'',email:''},
            }
               
            this.OnHandleChange=this.OnHandleChange.bind(this)
            this.OnHandleSubmit=this.OnHandleSubmit.bind(this)
                
            
            }
                
           
        
        OnHandleChange(e){
            
            const {name ,value}=e.target
            this.setState({usuario:{...this.state.usuario,[name]:value  } })
            
        }
        
        OnHandleSubmit(e){
            e.preventDefault();
            const id=Math.floor(Math.random() * 1000)
            const usuario={...this.state.usuario,id}
            alert('Você foi Cadastrado')
            this.setState({usuario:{ nome:'',email:'',celular:'' }})
            this.props.adicionarUsuario(usuario)
        }
       
    
    render() {
    
        return (
            <>
            
             <S.TelaLogin  >
            <div className="login" >
            <div className="login-container" >
                <div  className="titulo--container" >
                <h1>Cadastre-se</h1></div>
            <form className="form" onSubmit={this.OnHandleSubmit}  >
              <label for="fname" ></label>
              <input type="text"
               name="nome"
                className="input" 
                placeholder="Nome"
                value={this.state.usuario.nome}
                onChange={this.OnHandleChange}
                required
               ></input>
              <span className="form__input" ></span>

              <label for="fname" ></label>
              <input type="email" name="email" className="input" placeholder="Email"   onChange={this.OnHandleChange} value={this.state.usuario.email}   ></input>
              <span className="form__input" ></span>

              <label for="fname" ></label>
              <input type="number" name="celular" className="input" placeholder="Celular"  onChange={this.OnHandleChange} value={this.state.usuario.celular} ></input>
              <span className="form__input" ></span>

           
            <button className="button__Confirm" type="submit"   >Reservar Vaga</button>
           
            </form>
            </div>
            </div>
        </S.TelaLogin>
            
         
        </>
         
     
        )

  
           
        
    }
}

export default TelaUsuario;

