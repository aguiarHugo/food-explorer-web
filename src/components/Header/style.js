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
    margin: 2.8rem 0 2.8rem 4.3rem;
  }

  .app__header-input input {
    display: flex;
    align-items: center;
  }
`