import { Container } from "./style";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

export function Cards({img, title, text, price }){
  return(
    <Container>
        <div className="app__cards">
          <img src={img} alt="teste" />
          <h2>{title}</h2>
          <p>{text}</p>
          <h3>R$ {price}</h3>
          <div className="app__cards-buttons">
            <button type="button"><AiOutlineMinus size={20} color="#fff"/></button>
            <p>01</p>
            <button type="button"><AiOutlinePlus size={20} color="#fff"/></button>
            <button type="button">incluir</button>
          </div>
        </div>
    </Container>
  )
}