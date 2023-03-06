
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.DARK_400 };
    color: ${({theme}) => theme.COLORS.WHITE } 
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter .2s;
  }

  a:hover, button:hover {
    filter: brightness(.8);
  }

  textarea:focus, input:focus, select:focus {
    outline: 0;
}
`