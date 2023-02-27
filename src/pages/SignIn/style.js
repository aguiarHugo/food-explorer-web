import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30rem;

  @media (max-width: 1100px) { 
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
}


  .app__signin-logo {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .app__signin-logo img {
    width: 4.9rem;
    height: 4.9rem;
    
    @media (max-width: 1100px) { 
      width: 4.3rem;
      height: 4.3rem;
}
  }

  .app__signin-logo h1 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 4.9rem;

    @media (max-width: 1100px) { 
      font-size: 3.7rem;
}
  }

  .app__signin-form {
    width: 47.6rem;
    padding: 6.4rem;

    border-radius: 16px;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    @media (max-width: 1100px) { 
    background-color: ${({theme}) => theme.COLORS.DARK_400};
}
  }

  .app__signin-form h2 {
  font-family: 'Poppins', sans-serif;;
  font-weight: 500;
  font-size: 3.2rem;
  text-align: center;

  margin-bottom: 3.2rem;

  @media (max-width: 1100px) { 
    display: none;
}
  }

  .app__signin-form label {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  .app__signin-form p {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({theme}) => theme.COLORS.WHITE};


  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.2rem;
  }
`

