import styled from 'styled-components'

export const CoffeeContainer = styled.div`
    max-width: 256px;
    width: 100%;

    height: 310px;

    padding: 1.25rem 1.5rem;

    background-color: ${props => props.theme['base-card']};

    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding-top: 110px;

    img {
        width: 120px;
        height: 120px;

        position: absolute;

        top: -30px;
    }

    h3 {
        font-family: 'Baloo 2';
        font-size: 1.25rem;
        font-weight: bold;
        color: ${props => props.theme['base-subtitle']};
    }

    p {
        text-align: center;
        font-size: 0.87rem;
        color: ${props => props.theme['base-label']};
    }
`

export const LabelsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;

    span {
        background-color: ${props => props.theme['yellow-light']};
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        color: ${props => props.theme['yellow-dark']};
        font-size: 0.6rem;
        font-weight: bold;
    }
`

export const CartContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 0.25rem;

    span {
        font-size: 0.87rem;
    }

    strong {
        font-family: 'Baloo 2';
        font-size: 1.5rem;  
    }
`
