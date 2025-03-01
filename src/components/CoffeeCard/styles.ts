import styled from 'styled-components'
import { Separator as SeperatorRadix } from 'radix-ui'

export const CoffeeContainer = styled.section`
    display: flex;
    justify-content: space-between;
`

export const CoffeeBox = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    img {
        width: 4rem;
        height: 4rem;
    }
`

export const CoffeeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
        font-size: 1rem;
        color: ${props => props.theme['base-subtitle']};
        font-weight: 400;
    }
`

export const CoffeePrice = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme['base-text']};
`

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const RemoveButton = styled.button`
    background-color: ${props => props.theme['base-button']};
    border: none;
    border-radius: 6px;
    
    padding: 0.40rem 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    cursor: pointer;

    &:focus {
        box-shadow: none;
    }

    span {
        color: ${props => props.theme['base-text']};
        font-size: 0.75rem;
        line-height: 0;
    }
`

export const Separator = styled(SeperatorRadix.Root)`
    margin: 2rem 0;
    height: 1px;
    width: 100%;

    background-color: ${props => props.theme['base-button']};
`
