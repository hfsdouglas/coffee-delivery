import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    
    height: 6.5rem;
    width: 100vw;

    nav {
        width: 64rem;
        height: 100%;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    div {
        background: ${props => props.theme['purple-light']};
        padding: 0.5rem;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.25rem;

        span {
            color: ${props => props.theme['purple-dark']}
        }
    }
`
