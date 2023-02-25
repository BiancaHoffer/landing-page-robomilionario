import styled from "styled-components";

export const ContainerBanner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
   background-image: url('/images/money.png');
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   
    section:nth-child(2) {
      display: none;
    }
  }

  section {
    max-width: 1200px;
  }

  section:nth-child(2) {
  }

  h1 {
    text-align: center;
    font-family: 'Anton', sans-serif;
    font-size: 4.5rem;
    padding: 6rem 3rem 3rem;

    @media (max-width: 600px) {
      font-size: 3.5rem;
      padding: 2rem;
    }

    @media (max-width: 400px) {
      font-size: 2.5rem;
    }
  }

  img {
    margin-top: -8rem;
    z-index: -3;
    position: relative;
    width: 100%;
  }
`