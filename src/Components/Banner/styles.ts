import styled from "styled-components";

export const ContainerBanner = styled.div`
  height: 150vh;
  background-image: url('/images/banner.png');
  background-repeat: no-repeat;
  background-size: 80rem;
  background-position: bottom center; 
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
  }

  a {
    background: ${props => props.theme["purple-500"]};
    width: 30rem;
    height: 6rem;
    border-radius: 4px;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }

  span {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`