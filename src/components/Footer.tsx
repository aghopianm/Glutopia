import { FooterContainer, FooterText } from './FooterStyles';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterText>&copy; {currentYear} Glutopia Bakery</FooterText>
    </FooterContainer>
  );
};

export default Footer;