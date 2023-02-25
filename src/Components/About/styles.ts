import styled from "styled-components";

export const ContainerAbout = styled.div`
  background-color: ${props => props.theme["purple-700"]};
  width: 100%;
  padding: 12rem 3rem 0 3rem;
`
export const ContentAbout = styled.div`
  max-width: 1200px; 
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`