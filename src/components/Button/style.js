import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  padding: 1.2rem 3.2rem;

  border-radius: 5px;
  border: none;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};

  > a {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    > svg {
      color: white;
    }
  }
`