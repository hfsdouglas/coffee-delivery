import styled from 'styled-components'

export const QuantitySelectiorContainer = styled.div`
    display: flex;
    flex-direction: row;

    :focus {
        outline: 0;
        box-shadow: 0 0 0;
    }
    
    input {
        width: 24px;
        
        background-color: ${props => props.theme['base-button']};
        border: none;

        padding: 0.5rem 0.25rem;
        text-align: center;

        font-weight: bold;
    }

    button {
        height: 100%;
        width: 24px;
        line-height: 0;

        border-radius: 0;
        border: none;

        background-color: ${props => props.theme['base-button']};

        cursor: pointer;
    }

    button:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    button:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`
