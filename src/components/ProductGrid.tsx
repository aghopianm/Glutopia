import ProductCard from "./ProductCard";
import type { Product } from "../types/types";
import { Grid, LoadingSpinner } from "./ProductGridStyles";

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
