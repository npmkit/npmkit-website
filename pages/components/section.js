import styled from 'styled-components';
import T from 'prop-types';

const Section = styled.section`
  flex-direction: ${props => props.direction};
  display: flex;
  margin: 1rem 0;
`;

Section.propTypes = {
  direction: T.oneOf(['column', 'row']),
};

Section.defaultProps = {
  direction: 'column',
};

export default Section;
