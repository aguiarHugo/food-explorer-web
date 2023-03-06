import { Container } from "./style";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

import testImg from '../../assets/Mask group-1.png'

export function Cards({subject, img, title, text, price }){
  return(
    <Container>
        <h1>Refeições</h1>
        <div className="app__cards">
          <img src={testImg} alt="teste" />
          <h2>Pão com Epa</h2>
          <p>Pão com bacon cru e dois matos</p>
          <h3>R$ 70,00</h3>
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