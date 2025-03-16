
import type { Product } from "../types/types";
import { Card, ImageContainer, Image, Content, ProductName, Price } from "./ProductCardStyles";

type Props = {
  product: Product;
};

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
