
import logo from '../../assets/favicon.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/input'
import { Container } from "./style"

export function SignIn(){
  return(
    <Container>
    <div className="app__signin-logo">
      <img src={logo} alt="Logo" />
      <h1>food explorer</h1>
    </div> 

    <div className="app__signin-form">
      <h2>Faça o Login</h2>
      <label htmlFor="email">
        E-mail
        <Input placeholder="Digite seu e-mail"/>
      </label>
      <label htmlFor="password">
        Senha
        <Input placeholder="Digite sua senha"/>
      </label>
      <Button link={'/'} title={'Entrar'}/>
      
      <a href='/'> <p>Criar uma conta</p></a>
      
    </div>
  </Container>
  )
}