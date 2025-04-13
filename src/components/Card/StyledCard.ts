import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import theme from '../../theme'

export const StyledIcon = styled(FontAwesomeIcon)`
    border-radius: ${theme.radii.medium};
    background: #3f75fe;
    color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    position: relative;
    top: -20px;
`

export const StyledCard = styled.div`
  display: flex;
  max-width: 480px;
  padding: 0 1.5rem 2rem 2rem;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
    border-radius: ${theme.radii.medium};
  background: #fff;
  border: 1px solid #e3e3e3;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    background: #f0f0f0;
  }

  h3 {
    margin-bottom: 1rem;
    font-weight: normal;
  }

  p {
    color: #4b505a;
    font-size: 0.9rem;
  }
`
