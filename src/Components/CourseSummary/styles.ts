import styled from "styled-components";

export const ContainerCourseSummary = styled.div`
  width: 100%;
  background: rgb(1,0,16);
  background: linear-gradient(0deg, rgba(1,0,16,1) 0%, rgba(16,7,65,1) 88%);
  padding: 12rem 3rem 0 3rem;
`

export const ContentCourseSummary = styled.div`
  max-width: 1200px;
  height: 100%;
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

export const ContainerSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  column-gap: 8rem;
  align-items: center;
  height: 100%;
  
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`