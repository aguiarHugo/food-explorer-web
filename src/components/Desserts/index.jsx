import prugnaPie from '../../assets/dessert1.png'
import peachyPastrie from '../../assets/dessert2.png'
import macarons from '../../assets/dessert3.png'
import boloDeBanana from '../../assets/dessert4.png'

import { Cards } from '../Cards'
import { Container } from './style'
import './style'

export function Desserts(){
  return(
    <Container>
      <div className="app__userapp-desserts">
          <Cards 
          img={prugnaPie}
          title="Prugna Pie >"
          alt="Prugna Pie"
          text="Torta de ameixa com massa amentaigada, polvilho em açucar"
          price="79,97"
          />
          <Cards 
          img={peachyPastrie}
          title="Peachy Pastrie  >"
          alt="Peachy Pastrie >"
          text="Delicioso folheado de pêssego com folhas de hortelã."
          price="32,97"
          />
          <Cards 
            img={macarons}
            alt="Macarons"
            title="Macarons  >"
            text="Farinha de amêndoas, manteiga, claras e açúcar."
            price="79,97"
          />
          <Cards 
          img={boloDeBanana}
          alt="Bolo de Banana"
          title="Bolo de Banana>"
          text="Bolo de banana tradicional"
          price="20,97"
          />
        </div>
      </Container>
  )
}