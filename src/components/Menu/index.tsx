import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { Product } from "../../types/types";
import NavBar from "../NavBar";
import ProductGrid from "../ProductGrid";
import Footer from "../Footer";
import CategoryFilter from "./CategoryFilter";
import PriceList from "./PriceList";
import PhotoGallery from "./PhotoGallery";
import CategoryDescription from "./CategoryDescription";
import { MenuContainer, Title } from "./styles";

export type Category = "weddings" | "birthdays" | "cupcakes" | "prices";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("weddings");
  const { items, loading } = useSelector((state: RootState) => state.products);

  const filteredProducts = items.filter((product: Product) => {
    return product.category === activeCategory;
  });

  return (
    <>
      <NavBar />
      <MenuContainer>
        <Title>Our Delicious Selection</Title>
        
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        {activeCategory === "prices" ? (
          <PriceList />
        ) : (
          <>
            <CategoryDescription category={activeCategory} />
            <PhotoGallery category={activeCategory} />
          </>
        )}
        
        <ProductGrid products={filteredProducts} loading={loading} />
      </MenuContainer>
      <Footer />
    </>
  );
};

export default Menu;