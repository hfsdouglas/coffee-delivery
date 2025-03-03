import styled from 'styled-components'

export const SuccessContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const TitleContainer = styled.header`
    display: flex;
    flex-direction: column;

    h1 {
       font-size: 2rem;
       font-family: 'Baloo 2';
       font-weight: bold;
       color: ${props => props.theme['yellow-dark']};
    }

    span {
        font-size: 1.25rem; 
        color: ${props => props.theme['base-subtitle']};
    }
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
`

export const OrderDetailsCard = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;

    max-width: 526px;
    width: 100%;
    padding: 2.5rem;

    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    background-color: ${props => props.theme.background};

    &::before {
        content: '';

        position: absolute;
        top: -2px; left: -2px; right: -2px; bottom: -2px;
        z-index: -1;

        background: linear-gradient(95deg, #DBAC2C, #8047F8);

        border-radius: 6px;
        border-top-right-radius: 36px;
        border-bottom-left-radius: 36px;
    }
`

export const OrderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

type OrderInfoIcon = 'purple' | 'yellow' | 'orange'

interface OrderInfoIconProps {
  variant?: OrderInfoIcon
}

export const OrderInfoIcon = styled.span<OrderInfoIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;

    border-radius: 100%;

    background-color: ${props => {
      switch (props.variant) {
        case 'orange':
          return '#C47F17'
        case 'yellow':
          return '#DBAC2C'
        default:
          return '#8047F8'
      }
    }};

    color: ${props => props.theme.white};
`

export const LoadingContainer = styled.main`
  height: calc(100vh - 6.5rem);

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center
`
