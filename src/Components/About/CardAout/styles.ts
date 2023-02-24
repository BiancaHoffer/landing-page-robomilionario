import styled, { css } from "styled-components";

interface ContainerCardAboutProps {
  variant: 'purple600' | 'purple500' | 'purple300';
}

const colors = {
  purple600: '#4B0397',
  purple500: '#6C01DB',
  purple300: '#8E89FF',
}

export const ContainerCardAbout = styled.div<ContainerCardAboutProps>`
   ${props => css`
    background-color: ${colors[props.variant]};
   `};

   height: 22rem;
   width: 18rem;
   display: flex;
   flex-direction: column;

   span {
    position: relative;
    bottom: 4rem;
    font-size: 6rem;
    font-family: 'Anton',sans-serif;
   }

   div {
    position: relative; 
    top: -4rem;
    padding: 0rem 2rem;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   p {
    font-size: 2rem;
    text-align: center;
   }

   @media (max-width: 720px) {
    width: 22rem;
  }
`