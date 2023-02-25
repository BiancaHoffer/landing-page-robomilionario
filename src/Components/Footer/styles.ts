import styled from "styled-components";

export const ContainerFooter = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 3rem;

  a {
    background-color: ${props => props.theme["purple-500"]};
    padding: 0.3rem  0.4rem;
    cursor: pointer;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`