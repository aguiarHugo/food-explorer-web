
import logo from '../../assets/favicon.png'
import { Container } from './styles'

export function SignIn(){
  return(
    <Container>
      <div className="app__signin-logo">
        <img src={logo} alt="Logo" />
        <h1>food explorer</h1>
      </div> 
      <div className="app__signin-form">
        <h2>Crie sua conta</h2>
      </div>
    </Container>
  )
}