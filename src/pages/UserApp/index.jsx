import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Container } from "./style";

export function UserApp(){
  return(
    <Container>
      <Header />
      <Title />
      <div className="app__user-content">
        
      </div>
    </Container>
  )
}