import styled from 'styled-components'

export const IntroSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 5rem;
`

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const IntroItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 588px;

    h1 {
        color: ${props => props.theme['base-tile']};
        font-size: 3rem;
        font-family: 'Baloo 2';
        font-weight: 800;
        line-height: 1.4;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 400;
    }
`

export const CoffeeSection = styled.section`
    margin-top: 5rem;

    h2 {
        color: ${props => props.theme['base-subtitle']};
        font-size: 2rem;
        font-family: 'Baloo 2';
        font-weight: 800;
    }
`
