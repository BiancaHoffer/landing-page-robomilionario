import styled from "styled-components";

export const ContainerItemSummary = styled.p`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100%;
    gap: 1rem;
    padding: 1rem 0;
    font-size: 1.6rem;
    text-align: justify;
    border-bottom: 1px solid ${props => props.theme["purple-300"]};
`