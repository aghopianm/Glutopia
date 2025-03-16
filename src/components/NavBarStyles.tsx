import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 60px; // Adjust this value to match your desired logo size
  width: auto;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
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

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary-color);
  }
`;
