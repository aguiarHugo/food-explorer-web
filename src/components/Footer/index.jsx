import { Container } from "./style";

import footerLogo from '../../assets/footer-logo.png'

export function Footer(){
  return(
    <Container>
      <div className="app__footer-logo">
        <img src={footerLogo} alt="Logo" />
        <h3>food explorer</h3>
      </div>
      <div className="app__footer-copyright">
      <h3>© 2023 - Todos os direitos reservados.</h3>
      </div>
    </Container>
  )
}