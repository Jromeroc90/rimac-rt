import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  margin: 0 0 96px;
  
  @media only screen and (width > 768px) {
    margin: 32px 0;
  }
`;

const BlurBackground = ({ children }) => (
  <Background>
    {children}
  </Background>
);

export default BlurBackground;