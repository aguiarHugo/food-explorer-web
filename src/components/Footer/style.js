import styled from "styled-components";

export const Container = styled.footer`
  height: 7.7rem;
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  .app__footer-logo {
    display: flex;
    align-items: center;
    margin-left: 12.3rem;
    gap: 1.1rem;

    > h3 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: #4D585E;
    }

    > img {
      color: #4D585E;
    }
  }

  .app__footer-copyright {
    font-family: 'Roboto';
    font-size: 1.4rem;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    margin-right: 12.3rem;
  }
`