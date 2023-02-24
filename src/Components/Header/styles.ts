import { Link } from "react-scroll";
import styled from "styled-components";


interface ContainerHeaderProps {
  activeColor: boolean;
}

export const ContainerHeader = styled.header<ContainerHeaderProps>`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 4rem;

  background-color: ${props => props.activeColor ? props.theme["purple-700"] : 'transparent'};
  transition: background 0.3s;
`

export const ContentHeader = styled.div`
  width: 1200px;
  padding: 0 60px 0 60px;
  margin: 0 auto;
  height: 4rem;

  nav {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
    height: 4rem;
  }
`

export const LinkScroll = styled(Link)`
  cursor: pointer;
  font-size: 1.1rem;

  &.active {
    color: ${props => props.theme["purple-300"]};
    font-weight: bold;
  }

  &:hover {
    color: ${props => props.theme["purple-300"]};
    transition: color 0.3s;
  }
`