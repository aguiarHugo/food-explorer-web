import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Meals } from "../../components/Meals";
import { Desserts } from "../../components/Desserts";
import { Drinks } from "../../components/Drinks";
import { Footer } from "../../components/Footer";

import { Container } from "./style";

export function UserApp(){
  return(
    <Container>
      <Header />
      <Title />

      <h2>Refeições</h2>
      <Meals />

      <h2>Sobremesas</h2>
      <Desserts />

      <h2>Bebidas</h2>
      <Drinks />

      <Footer />
    </Container>
  )
}