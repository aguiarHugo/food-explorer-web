import spaguettiGambe from '../../assets/pasta.png'
import torradaParma from '../../assets/torradaparma.png'
import saladaRavanello from '../../assets/saladaravanello.png'
import salada from '../../assets/salada.png'

import { Cards } from '../Cards'
import { Container } from './style'

export function Meals(){
  return(
    <Container>
      <div className="app__userapp-meals">
          <Cards 
          img={spaguettiGambe}
          alt="Spaguetti Gambe"
          title="Spaguetti Gambe  >"
          text="Massa fresca com camarões e pesto."
          price="R$ 79,97"
          />
          <Cards 
          img={torradaParma}
          alt="Torrada Parma"
          title="Torrada Parma  >"
          text="Massa fresca com camarões e pesto."
          price="R$ 25,97"
          />
          <Cards 
            img={saladaRavanello}
            alt="Salada Ravanello"
            title="Salada Ravanello  >"
            text="Rabanetes, folhas verdes e molho agridoce salpicados com gerglim."
            price="R$ 49,97"
          />
          <Cards 
          img={salada}
          alt="Salada"
          title="Salada>"
          text="Alface, cebola, pepino e tomate ao azeite"
          price="R$ 20,97"
          />
        </div>
      </Container>
  )
}