import styled from "styled-components";

export const ContainerBuyCourse = styled.div`
  max-width: 1200px;
  padding: 0 60px 0 60px;
  margin: 0 auto;
  padding: 6rem 2rem;

  h2 {
    width: 100%;
    text-align: center;
    letter-spacing: 0.5rem;
    color: ${props => props.theme["purple-300"]};
    margin-top: 6rem;
    margin-bottom: 2rem;
  }

  > p {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0rem;

    h3 {
      font-size: 4rem;
      font-weight: bold;
      font-family: "Anton", sans-serif;
    }

    p {
      color: gray;
    }
  }
`