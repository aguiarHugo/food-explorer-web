import { Button } from '../../components/Button'
import { Input } from '../../components/input'
import logo from "../../assets/favicon.png"

import { Container } from "./style";

export function Header(){
  return(
    <Container>
      <div className="app__header-logo">
        <img src={logo} alt="Logo" />
        <h1>food explorer</h1>
      </div>
      <div className="app__header-input">
      <Input/>
      </div>
    </Container>
  )
}