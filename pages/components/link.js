import styled, { css } from 'styled-components';

const Link = styled.a`
  background: ${props => (props.primary ? '#221cb8' : 'transparent')};
  transition: color 200ms ease, background 200ms ease;
  border-radius: 0.15rem;
  text-decoration: none;
  display: inline-block;
  padding: ${props => (props.primary ? '1rem 1.5rem' : '0')};
  font: inherit;
  font-weight: ${props => (props.primary ? 'bold' : 'normal')};
  cursor: pointer;
  border: 0;
  color: ${props => (props.primary ? 'white' : '#0700b8')};

  &:hover {
    color: ${props => (props.primary ? '#00ff88' : '#00e67a')};
    background: ${props => (props.primary ? '#0700b8' : 'transparent')};
  }
`;

export default Link;
