import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30rem;

  .app__signin-logo {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .app__signin-logo img {
    width: 4.9rem;
    height: 4.9rem;
  }

  .app__signin-logo h1 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 4.9rem;
  }
`

