import styled from "styled-components";

export const ContainerBonus = styled.div`
   max-width: 100%;
   padding: 12rem 3rem 0 3rem;
`

export const ContentBonus = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 6rem;

    strong {
      color: ${props => props.theme["purple-300"]};
    }
  }
`

export const ContentCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`