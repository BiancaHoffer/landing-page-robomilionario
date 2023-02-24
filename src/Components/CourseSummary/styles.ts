import styled from "styled-components";

export const ContainerCourseSummary = styled.div`
width: 100%;
background: rgb(1,0,16);
background: linear-gradient(0deg, rgba(1,0,16,1) 0%, rgba(16,7,65,1) 88%);
padding: 6rem 0;
`

export const ContentCourseSummary = styled.div`
  max-width: 1200px;
  height: 100%;
  //padding: 0 60px 0 60px;
  margin: 0 auto;

  h2 {
    width: 100%;
    text-align: center;
    letter-spacing: 0.5rem;
    margin-bottom: 6rem;

    strong {
      color: ${props => props.theme["purple-300"]};
    }
  }
`

export const ContainerSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14rem;
  

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`