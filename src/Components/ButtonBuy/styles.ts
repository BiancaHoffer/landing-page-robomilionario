import styled from "styled-components";
import { Link } from "react-scroll"
export const ContainerButtonBuy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
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

    &:hover {
      opacity: 0.9;
      transition: opacity 0.3s;
    }
  }

  span {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`

export const LinkScroll = styled(Link)`
`