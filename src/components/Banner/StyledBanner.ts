import styled from 'styled-components'
import theme from '../../theme'

interface StyledBannerProps {
  type: keyof typeof theme.colors.signal
}

export const StyledBanner = styled.div<StyledBannerProps>`
  background-color: ${({type}) =>
    type ? theme.colors.signal[type]?.bg : '#fff'};
  color: ${({type}) => (type ? theme.colors.signal[type]?.text : '#000')};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: ${theme.radii.small};

  svg {
    color: ${({type}) => (type ? theme.colors.signal[type]?.text : '#fff')};
    margin-right: 0.5rem;
  }
`
