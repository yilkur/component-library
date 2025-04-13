import {styled} from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import theme from '../../theme'

export const StyledTestimonialWrapper = styled.div`
  padding: 1rem;
  padding: 6rem 0;

  @media (max-width: 800px) {
    padding-bottom: 0;
  }
`

export const StyledTestimonialContent = styled.div`
  height: 300px;
  background: #2545b8;
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: ${theme.radii.small};

  img {
    width: 100%;
    max-width: 380px;
    height: 460px;
    object-fit: cover;
    border-radius: ${theme.radii.large};
    position: relative;
    top: -50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
  }

  p {
    color: #fff;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 1rem;
    gap: 0;

    img {
      height: 200px;
      max-width: 300px;
      top: -100px;
    }

    > div {
      margin-top: -80px;
    }
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #fff;
  opacity: 0.8;
  font-size: 2rem;
`

export const StyledName = styled.p`
  font-size: 0.8rem;
`
