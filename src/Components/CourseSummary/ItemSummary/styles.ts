import styled from "styled-components";

export const ContainerItemSummary = styled.p`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    padding: 2rem 0rem;
    text-align: justify;
    border-bottom: 1px solid ${props => props.theme["purple-300"]};
`