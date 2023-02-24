import styled from "styled-components";

export const ContainerCreator = styled.div`
  background-color: white;
  background-image: url('/images/money.png');
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  div {
    padding: 2rem;

    &:nth-child(2) {
      width: 100%;
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2rem 6rem;
    }

    img {
      max-width: 100%;
    }

    h3 {
      color: ${props => props.theme["purple-300"]};
      font-weight: bold;
      font-size: 2rem;
      text-align: center;
      letter-spacing: 0.5rem;
    }

    p {
      color: gray;
      font-size: 1.5rem;
      text-align: justify;
    }
  }

  @media (max-width: 720px) {
   flex-direction: column-reverse;
   align-items: center;
   padding: 3rem;
  }
`