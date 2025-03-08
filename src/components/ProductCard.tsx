import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import type { Product } from '../types/types';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

const Price = styled.span`
  font-size: 1.1rem;
  color: #f8b042;
  font-weight: bold;
`;

type Props = {
  product: Product;
}

const ProductCard = ({ product }: Props) => {

  return (
    <Card>
      <ImageContainer>
        <Image src={product.image} alt={product.name} />
      </ImageContainer>
      <Content>
        <ProductName>{product.name}</ProductName>
        <Price>${product.price.toFixed(2)}</Price>
      </Content>
    </Card>
  );
};

export default ProductCard;