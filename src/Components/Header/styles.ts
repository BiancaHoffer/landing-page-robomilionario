import { Link } from "react-scroll";
import styled from "styled-components";


interface ContainerHeaderProps {
  activeColor: boolean;
}

export const BaseHeader = styled.header`
  width: 100%;
  height: 4rem;
`

export const ContainerHeader = styled.header<ContainerHeaderProps>`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 4rem;
  background-color: ${props => props.activeColor ? props.theme["purple-700"] : 'transparent'};
  transition: background 0.3s;
`

export const ContentHeader = styled.div`
  max-width: 1200px;
  padding: 0 3rem 0 3rem;
  margin: 0 auto;
  height: 4rem;
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    padding: 1rem;
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section:nth-child(1) {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 720px) {
      display: none;
    }
  }

  section:nth-child(2) {
    display: none;

    @media (max-width: 720px) {
      display: unset;
    }
  }
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