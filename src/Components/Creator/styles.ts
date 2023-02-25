import styled from "styled-components";

export const ContainerCreator = styled.div`
  background-color: white;
  background-image: url('/images/money.png');
  display: flex;
  align-items: center;
  gap: 3rem;
  justify-content: space-between;
  padding: 3rem;
  margin-top: 12rem;

  @media (max-width: 1120px) {
    flex-direction: column-reverse;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(2) {
      width: 100%;
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

   

    img {
      width: 80%;

      @media (max-width: 1120px) {
        max-width: 60%;
      }
    }

    h2 {
      color: ${props => props.theme["purple-300"]};
      font-weight: bold;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 2rem;
    }

    p {
      color: gray;
      font-size: 1.5rem;
      text-align: justify;

      @media (max-width: 1120px) {
        text-align: center;
      }
    }
  } 
`