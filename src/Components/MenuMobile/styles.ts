import { Link } from "react-scroll";
import styled, { css } from "styled-components";

interface ContainerMenuMobileProps {
  isVisible: boolean;
}

export const ContainerMenuMobile = styled.header<ContainerMenuMobileProps>`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(1,0,16);
  background: linear-gradient(0deg, rgba(1,0,16,1) 0%, rgba(16,7,65,1) 88%);

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  transform: translateY(50px);

  svg {
    position: absolute;
    top: 1rem;
    left: 1rem;
    transform: rotate(45deg);
    transition: transform .3s;
    cursor: pointer;
  }

  section {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: start;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    svg {
      transform: rotate(0deg);
    }
  `}
`

export const LinkScroll = styled(Link)`
  cursor: pointer;
  font-size: 1.1rem;

  strong {
    color: ${props => props.theme["purple-500"]};
  }

  &.active {
    color: ${props => props.theme["purple-300"]};
    font-weight: bold;
  }

  &:hover {
    color: ${props => props.theme["purple-300"]};
    transition: color 0.3s;
  }
`