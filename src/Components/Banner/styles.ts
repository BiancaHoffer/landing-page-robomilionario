import styled from "styled-components";

export const ContainerBanner = styled.div`
  @media (max-width: 720px) {
   background-image: url('/images/money.png');
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
  }
`

export const ContentImage = styled.div`
  background-image: url('/images/banner.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom center; 

  height: 30rem;
  width: 100%;

  @media (max-width: 720px) {
    height: 0rem;
  }
`

export const ContentBanner = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-top: 12rem;

  @media (max-width: 720px) {
   height: 100%;
   justify-content: center;
   position: static;
   padding-top: 0rem;
  }

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