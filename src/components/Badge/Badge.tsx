import {StyledBadge} from './StyledBadge'

interface BadgeProps {
  text: string
  color: 'neutral' | 'error' | 'warning' | 'success'
  type: 'square' | 'pill'
}

const Badge = ({text = 'Button text', color = 'neutral', type = 'square'}: BadgeProps) => (
  <StyledBadge color={color} type={type}>
    {text}
  </StyledBadge>
)

export default Badge
