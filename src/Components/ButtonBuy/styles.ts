import styled from "styled-components";

export const ContainerButtonBuy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  padding: 3rem;
  
  a {
    background: ${props => props.theme["purple-500"]};
    border-radius: 4px;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 6rem;

    &:hover {
      opacity: 0.9;
      transition: opacity 0.3s;
      
    }

    @media (max-width: 420px) {
      padding: 1rem 4rem;
      font-size: 1.4rem;
      //padding: 1rem 1rem;
    }
  }

  span {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    gap: 0.3rem;
  }
`