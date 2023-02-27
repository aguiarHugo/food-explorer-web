import { Container } from "./style";

export function Button({link, title, icon: Icon}){
  return(
    <Container>
       {Icon && <Icon size={24} color='white' />}
      <a href={link}>{title}</a>
    </Container>
  )
}