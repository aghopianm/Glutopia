import styled from "styled-components";
import ProductCard from "./ProductCard";
import type { Product } from "../types/types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`;

type Props = {
  products: Product[];
  loading: boolean;
};

const ProductGrid = ({ products, loading }: Props) => {
  if (loading) {
    return <LoadingSpinner>Loading products...</LoadingSpinner>;
  }

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
