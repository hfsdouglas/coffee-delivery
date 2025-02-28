import styled from 'styled-components'

export const ButtonContainer = styled.button`
    background-color: ${props => props.theme['purple']};
    padding: 0.5rem;
    border: none;
    border-radius: 8px;
    line-height: 0;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['purple-dark']};
    }
`
