import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EtsyLogo = styled.img`
  height: 22px;
  width: auto;
  margin-top: 2px;
`;

const EtsyLink = styled.a`
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
  padding-top: 2px;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;


const Logo = styled(Link)`
  font-size: 1.5rem;
  font-family: 'Pacifico', cursive;
  color: #ff69b4; /* Hot Pink */
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.3);
`;


const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Glutopia Bakery</Logo>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <EtsyLink 
            href="https://www.etsy.com/uk/shop/GlutopiaCakeBoutique" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <EtsyLogo src="/images/etsy.jpg" alt="Etsy Shop" />
          </EtsyLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;