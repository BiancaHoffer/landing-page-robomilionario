import styled from "styled-components";

export const ContainerAbout = styled.div`
  background-color: ${props => props.theme["purple-700"]};
  width: 100%;
  padding: 12rem  0 6rem 0;
`

export const ContentAbout = styled.div`
   max-width: 1200px;
   padding: 0 60px 0 60px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  
  
  @media (max-width: 720px) {
    flex-direction: column;
  }
`