import styled from 'styled-components'

 export const TelaLogin=styled.div ` 
.login{
   min-height: 480px;
   width: 580px;
   background-color:#fff ;
   box-sizing:border-box;
   padding: 32px;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   align-items: center;
}
.login-container{
    padding: 5px;
    width: 450px;

    
}

.titulo--container{
    padding-left: 9rem;
}

.login-container  h1{
color:#006;
font-size: 30px;
}

.form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
.input{
    height: 48px;
    width: 100%;
    display:flex;
    box-sizing:border-box;
    padding-left: 8px;
    border: unset ;
    outline: none;
}
.form__input{
    height: 1px;
    width: 100%;
    margin-bottom: 16px;
    background-color:#A5D8FF;
    transition: .3s ease-in-out;
}
.button__Confirm{
    width: 100%;
    height:48px ;
    background-color:#4088f6 ;
    
    border: unset;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color:#fff;
  
    


}
    

`
