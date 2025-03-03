import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonContainer = styled(Link)`
    position: relative;
    background-color: ${props => props.theme['yellow-light']};
    padding: 0.5rem;
    border: none;
    border-radius: 8px;
    line-height: 0;

    &:hover {
        cursor: pointer;
    }

    span {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;


        height: 1.25rem;
        width: 1.25rem;

        font-size: 0.75rem;
        color: ${props => props.theme.white};
        font-weight: bold;

        background-color: ${props => props.theme.yellow};
        border-radius: 100px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`
