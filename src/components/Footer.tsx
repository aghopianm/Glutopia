import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid #eee;
  text-align: center;
  margin-top: auto;
`;

const FooterText = styled.p`
  color: var(--text-color);
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterText>&copy; {currentYear} Glutopia Bakery</FooterText>
    </FooterContainer>
  );
};

export default Footer;