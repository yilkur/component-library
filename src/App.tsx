import './App.css'

import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonial/Testimonial'
import testimonialImg from './assets/img/testimonial.jpeg'

import {StyledShowcaseWrapper} from './components/StyledComponents'
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'

const App = () => (
  <>
    <h1>Component Library 🧰</h1>

    <section>
      <h2>Badges</h2>
      <StyledShowcaseWrapper>
        <Badge text="Neutral" color="neutral" type="pill" />
        <Badge text="Warning" color="warning" type="pill" />
        <Badge text="Danger" color="error" type="pill" />
        <Badge text="Success" color="success" type="pill" />
      </StyledShowcaseWrapper>

      <StyledShowcaseWrapper>
        <Badge text="Neutral" color="neutral" type="square" />
        <Badge text="Warning" color="warning" type="square" />
        <Badge text="Danger" color="error" type="square" />
        <Badge text="Success" color="success" type="square" />
      </StyledShowcaseWrapper>
    </section>

    <section>
      <h2>Banner</h2>
      <StyledShowcaseWrapper>
        <Banner
          text="This is a success banner!"
          type="success"
          title="Success"
        />
        <Banner
          text="This is a warning banner!"
          type="warning"
          title="Warning"
        />
        <Banner text="This is a error banner!" type="error" title="Error" />
        <Banner
          text="This is a neutral banner!"
          type="neutral"
          title="Neutral"
        />
      </StyledShowcaseWrapper>

      <StyledShowcaseWrapper>
        <Banner type="success" title="Success" />
        <Banner type="warning" title="Warning" />
        <Banner type="error" title="Error" />
        <Banner type="neutral" title="Neutral" />
      </StyledShowcaseWrapper>
    </section>

    <section>
      <h2>Cards</h2>

      <StyledShowcaseWrapper>
        <Card
          icon={faArrowUpFromBracket}
          title="Easy Deployment"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
        />
      </StyledShowcaseWrapper>
    </section>

    <section>
      <h2>Testimonial</h2>

      <StyledShowcaseWrapper>
        <Testimonial
          img={testimonialImg}
          imgAlt="May Andersons"
          text="Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Sed urna nulla vitae laoreet augue. 
          Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
          name="May Andersons"
          func="Workcation, CTO"
        />
      </StyledShowcaseWrapper>
    </section>
  </>
)

export default App
