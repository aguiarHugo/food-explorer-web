import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${( { theme } ) => theme.COLORS.DARK_900 };
  color: ${( { theme } ) => theme.COLORS.LIGHT_500 };

  margin: .8rem 0 3.2rem 0;
  border-radius: 8px;

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;

    background: transparent;
    color: ${( { theme } ) => theme.COLORS.WHITE};

    border: none;

    &::placeholder {
      color: ${( { theme } ) => theme.COLORS.LIGHT_500 }
    }

    > svg {
      margin-left: 1.6rem;
    }
  }

`