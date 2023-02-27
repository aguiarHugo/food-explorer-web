import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10.4rem;
  
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  .app__header-logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-left: 12rem;
  }

  .app__header-logo img {
    width: 3rem;
    height: 3rem;   
  }

  .app__header-logo h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  .app__header-input {
    width: 50rem;
    margin: 0 3.2rem;
  }

  .app__header-button {
    display: flex;
    align-items: center;
    width: 21.6rem;
  }

  .app__header-signout {
    margin: 0 12.8rem 0 3.7rem;
  }

  .app__header-signout button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
  }

  .app__header-signout svg {
    font-size: 2.4rem;
    color: white;
  }
  
`