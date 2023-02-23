import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 4rem;
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