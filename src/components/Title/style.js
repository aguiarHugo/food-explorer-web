import styled from "styled-components";

export const Container = styled.div`
  width: 112rem;
  height: 26rem;
  margin: 16.4rem auto;

  display: flex;
  justify-content: end;
  align-items: center;
background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  .app__title-img{
    width: 60rem;
    height: 40rem;

    position: absolute;
    left: 15rem;
    top: 11.6rem;
  }

  .app__title-text {
    margin-right: 10rem;
  }

  .app__title-text h1{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 4rem;
    line-height: 140%;
  }

  .app__title-text p {
    font-family: 'Roboto';
    font-size: 1.6rem;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`