import styled from 'styled-components';

const Logo = props => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M18,12l12,-6l0,4l-4,2l0,11l-4,2l0,-11l-4,2l0,-4Z" fill="#020202" />
    <path d="M16,13l2,-1l0,15l-2,1l-2,-1l0,-15l2,1Z" fill="#020202" />
    <path d="M10,6l6,3l6,-3l-6,-3l-6,3" fill="#020202" />
    <path
      d="M2,6l0,15l4,2l0,-8l4,10l4,2l-4,-12l4,-3l-4,-2l-4,3l0,-5"
      fill="#020202"
    />
  </svg>
);

const StyledLogo = styled(Logo).attrs({ title: 'npmkit logo' })`
  width: 64px;
  height: 64px;
`;

export default StyledLogo;
