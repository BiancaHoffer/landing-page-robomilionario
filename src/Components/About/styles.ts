import styled from "styled-components";

export const ContainerAbout = styled.div`
  background-color: ${props => props.theme["purple-700"]};
  width: 100%;
  height: 50rem;
`

export const ContentAbout = styled.div`
   width: 1200px;
   padding: 0 60px 0 60px;
   margin: 0 auto;
   height: 50rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   h2 {
    margin-bottom: 6rem;
    align-self: flex-start;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    text-align: center;
    width: 100%;
   }
`

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`