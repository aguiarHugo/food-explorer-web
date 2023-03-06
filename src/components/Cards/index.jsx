import { Container } from "./style";

import testImg from '../../assets/Mask group-1.png'

export function Cards({title, text, value, img}){
  return(
    <Container>
      <img src={testImg} alt="teste" />
      <h1></h1>
    </Container>
  )
}