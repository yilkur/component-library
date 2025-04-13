import styled from 'styled-components'
import theme from '../../theme'

interface StyledBadgeProps {
  type: 'square' | 'pill'
  color: keyof typeof theme.colors.signal
}

const radiiMapping: Record<'square' | 'pill', keyof typeof theme.radii> = {
  square: 'small',
  pill: 'large'
}

export const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-flex;
  padding: 0.25rem 1rem;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => theme.colors.signal[color]?.bg || '#FFFFFF'};
  color: ${({color}) => theme.colors.signal[color]?.text || '#000'};
  border-radius: ${({type}) => (type ? theme.radii[radiiMapping[type]] : '0')};
`
