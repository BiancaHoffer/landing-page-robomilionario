import styled from "styled-components";

export const ContainerBonus = styled.div`
   max-width: 1200px;
   padding: 0 60px 0 60px;
   margin: 0 auto;
   padding: 6rem 0;

   h2 {
    margin-bottom: 6rem;
    align-self: flex-start;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    text-align: center;
    width: 100%;
   

    strong {
      color: ${props => props.theme["purple-300"]};
    }
   }
`

export const ContentCardBonus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`