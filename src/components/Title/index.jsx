import titleImg from '../../assets/title-img.png'
import { Container } from './style'

export function Title(){
  return(
    <Container>
      <div className="app__title-img">
        <img src={titleImg} alt="" />
      </div>
      <div className="app__title-text">
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  )
}