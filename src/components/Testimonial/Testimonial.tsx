import {
  StyledTestimonialWrapper,
  StyledTestimonialContent,
  StyledIcon,
  StyledName
} from './StyledTestimonial'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'

interface TestimonialProps {
  img: string
  imgAlt: string
  text: string
  name: string
  func: string
}

const Testimonial = ({img, imgAlt, text, name, func}: TestimonialProps) => (
  <StyledTestimonialWrapper>
    <StyledTestimonialContent>
      <img src={img} alt={imgAlt} />
      <div>
        <StyledIcon icon={faQuoteLeft} />
        <p>{text}</p>
        <StyledName>
          <b>{name}</b>
          <br />
          {func}
        </StyledName>
      </div>
    </StyledTestimonialContent>
  </StyledTestimonialWrapper>
)

export default Testimonial
