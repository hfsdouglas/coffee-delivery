import styled from 'styled-components'
import type { IntroItem } from '.'

interface IntroItemIconProps {
  type: IntroItem
}

export const IntroItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const IntroItemIcon = styled.div<IntroItemIconProps>`
    width: 32px;
    height: 32px;

    border-radius: 100px;
    padding: 0.5rem;

    background-color: ${props => {
      if (props.type === 'box') {
        return props.theme['base-text']
      }

      if (props.type === 'shopping') {
        return props.theme['yellow-dark']
      }

      if (props.type === 'timer') {
        return props.theme.yellow
      }

      if (props.type === 'coffee') {
        return props.theme.purple
      }
    }};

    display: flex;
    justify-content: center;
    align-items: center;
`
