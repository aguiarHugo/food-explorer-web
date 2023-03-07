import styled from "styled-components";

export const Container = styled.div`

  margin: 2.3rem 0;
  
  

  .app__cards {

    width: 30.4rem;
    min-height: 50rem;
    padding: 2.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK_500};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    border: 1px solid #000204;
    border-radius: 8px;

    > button {
      background: transparent;
      border: none;
      position: relative;
      align-self: flex-end;
     }

    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    > h2 {
      font-family: 'Poppins';
      font-weight: 700;
      text-align: center;
      font-size: 2.4rem;
      line-height: 140%;
    }

    > p {
      font-family: 'Roboto';
      font-size: 1.4rem;
      line-height: 160%;

      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

     > h3 {
      font-family: 'Roboto';
      font-size: 3.2rem;
      line-height: 160%;
      color: ${({theme}) => theme.COLORS.CAKE_200};
    }

    .app__cards-buttons {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      > button {
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
      }

      > button:last-child {
          background-color: ${({theme}) => theme.COLORS.TOMATO_100};
          color: ${({theme}) => theme.COLORS.LIGHT_300};

          padding: 1.2rem 2.4rem;
          border-radius: 5px;

      }
        
      > p {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 2rem;
        line-height: 160%;
      }
    }
  }
`