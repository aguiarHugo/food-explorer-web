import styled from "styled-components";

export const Container = styled.div`
  .app__userapp-desserts {
    overflow-x: scroll;
    width: 112rem;
    margin: auto;

    gap: 2.7rem;
    display: flex;
    flex-wrap: nowrap;
  }

  .app__userapp-desserts::-webkit-scrollbar {
    width: 8px;             
  }

  .app__userapp-desserts::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};        
  }

  .app__userapp-desserts::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};        
    border-radius: 20px;       
    border: 3px solid ${({ theme }) => theme.COLORS.CAKE_200};  
  }
`