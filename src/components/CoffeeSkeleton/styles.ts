import styled from 'styled-components'

export const CoffeeSkeletonItem = styled.div`
    max-width: 256px;
    width: 100%;
    height: 310px;

    background: linear-gradient(90deg, 
        ${props => props.theme['base-card']} 25%, 
        ${props => props.theme['base-input']} 50%, 
        ${props => props.theme['base-card']} 75%
    );
    background-size: 400% 100%;

    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    @keyframes shimmer {
        0% {
            background-position: -200px 0;
        }
        100% {
            background-position: 200px 0;
        }
    }

    animation: shimmer 1.5s ease-in-out infinite;
`
