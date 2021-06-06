import React, { Component } from 'react'
import TelaUsuario from '../TelaUsuario/TelaUsuario';
import User from '../cadastro/User'
import Container from '../cadastro/Container'
import UserContainer from '../cadastro/ContainerStyle';

class Usuarios extends Component {
    constructor(props){
        super(props)
        this.state = {
            mostrarComponente:false,
            usuarios: [
              { id: 1, nome: 'João', sobrenome: 'Silva', email: 'joao@mail.com', celular:"98454545454"}]
            
          
           
        }
         
     
       this.adicionarUsuario = this.adicionarUsuario.bind(this)
} 
        
            adicionarUsuario(usuario) {
                const usuarios = [...this.state.usuarios, usuario]
                this.setState({ usuarios: usuarios })
                this.setState({mostrarComponente:true})
           }
           
           removerUsuario(usuario) {
            if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} "?`)) {
              let usuarios = this.state.usuarios
              usuarios = usuarios.filter(x => x.id !== usuario.id)
              this.setState({ usuarios: usuarios })
            }
          }

        render(){
            
            return (
                    <div className="App" >
                    <TelaUsuario
                            adicionarUsuario={this.adicionarUsuario}
                                  />
                    
                
                    
            <UserContainer  >
               
                <div className="cadastro__container" >
                   <Container/>
                {this.state.usuarios.map(usuario=>(
                  
                    <User 
                    key={usuario.id}
                    usuario={usuario}
                    warn={this.handleToggleClick}
                    removerUsuario= { this.removerUsuario.bind(this, usuario)}
                    />

                ))}</div>
                </UserContainer>
                
   
</div>
 );
}
        
}   
   

 export default Usuarios;