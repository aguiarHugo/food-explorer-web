
import logo from '../../assets/favicon.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/input'
import { Container } from './styles'


export function SignUp(){
  return(
    <Container>
      <div className="app__signup-logo">
        <img src={logo} alt="Logo" />
        <h1>food explorer</h1>
      </div> 

      <div className="app__signup-form">
        <h2>Crie sua conta</h2>
        <label htmlFor="name">
          Seu nome
          <Input placeholder="Digite seu nome"/>
        </label>
        <label htmlFor="email">
          E-mail
          <Input placeholder="Digite um e-mail válido"/>
        </label>
        <label htmlFor="password">
          Senha
          <Input placeholder="No mínimo 6 caracteres"/>
        </label>
        <Button link={'/'} title={'Criar Conta'}/>
        
        <a href='/'> <p>Já tenho uma conta</p></a>
        
      </div>
    </Container>
  )
}