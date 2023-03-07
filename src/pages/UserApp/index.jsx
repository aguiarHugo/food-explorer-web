import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Meals } from "../../components/Meals";
import { Desserts } from "../../components/Desserts";


import { Container } from "./style";

export function UserApp(){
  return(
    <Container>
      <Header />
      <Title />

      <h1>Refeições</h1>

      <Meals />

      <h1>Sobremesas</h1>
      <Desserts />

    </Container>
  )
}