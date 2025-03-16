import { useState } from "react";
import { SocialIcon } from "./SocialIcon";
import { Nav, NavContainer, LogoImage, Logo, NavLinks, MenuButton, NavLink } from "./NavBarStyles";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
        <LogoImage src="/images/GB.jpg" alt="Glutopia Bakery Logo" />
        </Logo>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
          <SocialIcon platform="instagram" />
          <SocialIcon platform="facebook" />
          <SocialIcon platform="etsy" />
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
export default NavBar;
