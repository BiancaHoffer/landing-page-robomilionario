import styled from "styled-components";

export const ContainerCardBonus = styled.div`
  background-color: ${props => props.theme["purple-700"]};
  //height: 30rem;
  border-radius: 4px;
  width: 100%;
  padding: 3rem 4rem ;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  span {
    border: 1px solid ${props => props.theme["purple-300"]};
    border-radius: 4px;
    padding: 0.4rem 1rem;
    color: ${props => props.theme["purple-300"]};
    font-weight: bold;
  }

  h3 {  
    font-family: 'Anton';
    font-size: 1.5rem;
    color: ${props => props.theme["purple-300"]};
    text-align: center;
    width: 100%;
    letter-spacing: 0.5rem;

    background: #8E89FF;
    background: linear-gradient(to top, #8E89FF 25%, #6C01DB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
  }
`