import { RadioGroup } from 'radix-ui'
import styled from 'styled-components'

export const CheckoutForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: 2rem;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        font-family: 'Baloo 2';
        font-size: 1.125rem;
        font-weight: bold;
    }
`
export const FormCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
`

export const CoffeesContainer = styled.div`
    background-color: ${props => props.theme['base-card']};

    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    padding: 2.5rem;

    footer {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
`

export const CardHeader = styled.header`
    display: flex;
    gap: 0.5rem;

    svg: {
        line-height: 0;
    }

    div {
        display: flex;
        flex-direction: column;

        h4 {
            font-weight: 400;
            font-size: 1rem;
            color: ${props => props.theme['base-subtitle']};
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme['base-text']};
        }
    }
`

export const Table = styled.table`
    border-spacing: 0.5rem;
    margin-top: -16px;
`

export const RadioCardContainer = styled(RadioGroup.Root)`
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;

    & *:focus {
        box-shadow: none;
    }
`

export const RadioCardItem = styled(RadioGroup.Item)`
    position: relative;

    width: 100%;
    height: 50px;

    border: none;
    border-radius: 6px;

    background-color: ${props => props.theme['base-button']};

    cursor: pointer;
    
    [data-state = "checked"]{
        background-color: ${props => props.theme['purple-light']};
        border: 1px solid ${props => props.theme['purple']};
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        padding: 1rem 1.25rem;

        label {
            color: ${props => props.theme['base-text']};
            font-size: 0.75rem;
        }

        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        z-index: 1;
    }
`

export const RadioCardIndicator = styled(RadioGroup.Indicator)`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    border-radius: 6px;
`

export const Input = styled.input`
    width: 100%;
    height: 42px;

    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 6px;

    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};

    font-size: 0.875rem;

    padding: 0.75rem;

    &::placeholder {
        color: ${props => props.theme['base-label']};
    }
`

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};
    }

    strong {
        font-size: 1.25rem;
        color: ${props => props.theme['base-text']};
    }
`

export const PaymentButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme.white};

    border: none;
    border-radius: 6px;

    padding: 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;

    cursor: pointer;
`
