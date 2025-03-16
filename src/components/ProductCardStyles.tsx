import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: "Playfair Display", serif;
`;

export const Price = styled.span`
  font-size: 1.1rem;
  color: #f8b042;
  font-weight: bold;
`;