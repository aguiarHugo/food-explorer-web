import { Container } from "./style";

export function Button({link, title}){
  return(
    <Container>
      <a href={link}>{title}</a>
    </Container>
  )
}