import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Cards } from "../../components/Cards";

import { Container } from "./style";

export function UserApp(){
  return(
    <Container>
      <Header />
      <Title />
      <Cards />
      <div className="app__user-content">
        
      </div>
    </Container>
  )
}