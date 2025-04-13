import {StyledBanner} from './StyledBanner'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faCircleInfo,
  faCircleCheck,
  faCircleExclamation,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'

interface BannerProps {
  title: string
  text?: string
  type: 'error' | 'warning' | 'success' | 'neutral'
}

const iconMap = {
  neutral: faCircleInfo,
  success: faCircleCheck,
  error: faCircleExclamation,
  warning: faTriangleExclamation
}

const Banner = ({
  title = 'Button text',
  text,
  type = 'neutral',
}: BannerProps) => (
  <StyledBanner type={type}>
    <h4>
      <FontAwesomeIcon icon={iconMap[type]} />
      {title}
    </h4>
    {text}
  </StyledBanner>
)

export default Banner
