import { Button } from '../../components/Button'
import { Input } from '../../components/input'

import {TbReceipt} from 'react-icons/tb'
import { GoSignOut } from 'react-icons/Go'
import { FiSearch } from 'react-icons/fi'

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
        <Input 
          type='text'
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes" 
        />
      </div>
      <div className="app__header-button">
        <Button icon={TbReceipt} title='Pedidos'/>
      </div>
      <div className="app__header-signout">
        <button type='button'>
          <GoSignOut />
        </button>
      </div>
    </Container>
  )
}