import styled from "styled-components";

export const ContainerBanner = styled.div`
  height: 150vh;
  background-image: url('/images/banner.png');
  background-repeat: no-repeat;
  background-size: 80rem;
  background-position: bottom center; 

  @media (max-width: 720px) {
   height: 100vh;
  }
`

export const ContentBanner = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 12rem;

  h1 {
    text-align: center;
    font-family: 'Anton', sans-serif;
    font-size: 4.5rem;
    margin-bottom: 4rem;
    padding: 0 2rem;
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 3rem;
    }
  }
`