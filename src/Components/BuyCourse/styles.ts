import styled from "styled-components";


export const ContainerBuyCourse = styled.div`
   max-width: 100%;
   padding: 12rem 3rem;
`

export const ContentBuyCourse = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: ${props => props.theme["purple-300"]};
    text-transform: uppercase;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  > p {
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
  }

  .section-values {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0rem 0rem 0rem;
    text-align: center;

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