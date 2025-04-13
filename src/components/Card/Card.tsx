import {StyledCard, StyledIcon} from './StyledCard'
import {IconProp} from '@fortawesome/fontawesome-svg-core'

interface CardProps {
  title: string
  text: string
  icon: IconProp
}

const Card = ({icon, title, text}: CardProps) => (
  <StyledCard>
    <StyledIcon icon={icon} />
    <h3>{title}</h3>
    <p>{text}</p>
  </StyledCard>
)

export default Card
