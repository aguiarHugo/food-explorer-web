import espresso from '../../assets/drink1.png'
import sucoDeMaracuja from '../../assets/drink2.png'
import teDautunno from '../../assets/drink3.png'
import pomo from '../../assets/drink4.png'

import { Cards } from '../Cards'
import { Container } from './style'
import './style'

export function Drinks(){
  return(
    <Container>
      <div className="app__userapp-meals">
          <Cards 
          img={espresso}
          alt="Espresso"
          title="Espresso  >"
          text="Massa fresca com camarões e pesto."
          price="R$ 79,97"
          />
          <Cards 
          img={sucoDeMaracuja}
          alt="Suco de Maracujá"
          title="Suco de Maracujá >"
          text="Massa fresca com camarões e pesto."
          price="R$ 25,97"
          />
          <Cards 
            img={teDautunno}
            alt="Tè d'auttuno"
            title="Tè d'auttuno >"
            text="Chá de anis, canela e limão. Sinta o outono italiano."
            price="R$ 19,97"
          />
          <Cards 
          img={pomo}
          alt="Pomo"
          title="Pomo>"
          text="Alface, cebola, pepino e tomate ao azeite"
          price="R$ 20,97"
          />
        </div>
      </Container>
  )
}