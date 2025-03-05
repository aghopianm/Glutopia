import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import ProductGrid from "./ProductGrid";
import type { RootState } from "../store/store";
import type { Product } from "../types/types";
import Footer from "./Footer";

const MenuContainer = styled.div`
  padding-top: 80px;
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-family: "Playfair Display", serif;
  margin: 2rem 0;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin: 1rem;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => (props.active ? "#007AFF" : "#f5f5f5")};
  color: ${(props) => (props.active ? "white" : "var(--text-color)")};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#e5e5e5")};
  }
`;

const CategoryDescription = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Photo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

type Category = "all" | "weddings" | "birthdays" | "cupcakes";
type CategoryData = {
  description: string;
  photos: string[];
};

const categoryContent: Record<Exclude<Category, "all">, CategoryData> = {
  weddings: {
    description:
      "At Glutopia, we specialize in creating stunning wedding cakes that become the centerpiece of your special day. Our bespoke wedding cake service includes personal consultations, tasting sessions, and detailed design discussions to ensure your cake is exactly as you've dreamed. Each cake is handcrafted with premium ingredients and decorated with meticulous attention to detail.",
    photos: [
      "/images/wedding-cake-1.jpg",
      "/images/wedding-cake-2.jpg",
      "/images/wedding-cake-3.jpg",
      "/images/wedding-cake-4.jpg",
    ],
  },
  birthdays: {
    description:
      "Make your birthday celebration unforgettable with our custom birthday cakes. From whimsical children's designs to sophisticated adult celebrations, we create personalized cakes that reflect your style and personality. Our cakes can be customized with your favorite flavors, colors, and themed decorations.",
    photos: [
      "/images/birthday-cake-1.jpg",
      "/images/birthday-cake-2.jpg",
      "/images/birthday-cake-3.jpg",
      "/images/birthday-cake-4.jpg",
    ],
  },
  cupcakes: {
    description:
      "Our gourmet cupcakes are perfect for any occasion. Each batch is freshly baked using premium ingredients and topped with our signature buttercream frosting. Available in classic flavors or custom designs, our cupcakes can be ordered individually or as elegant towers for special events.",
    photos: [
      "/images/cupcake-1.jpg",
      "/images/cupcake-2.jpg",
      "/images/cupcake-3.jpg",
      "/images/cupcake-4.jpg",
    ],
  },
} as const;

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("weddings");
  const { items, loading } = useSelector((state: RootState) => state.products);

  const filteredProducts = items.filter((product: Product) => {
    if (activeCategory === "all") return true;
    return product.category === activeCategory;
  });

  return (
    <>
      <NavBar />
      <MenuContainer>
        <Title>Our Delicious Selection</Title>
        <CategoryFilter>
          <FilterButton
            active={activeCategory === "weddings"}
            onClick={() => setActiveCategory("weddings")}
          >
            Weddings
          </FilterButton>
          <FilterButton
            active={activeCategory === "birthdays"}
            onClick={() => setActiveCategory("birthdays")}
          >
            Birthdays
          </FilterButton>
          <FilterButton
            active={activeCategory === "cupcakes"}
            onClick={() => setActiveCategory("cupcakes")}
          >
            Cupcakes
          </FilterButton>
        </CategoryFilter>

        {activeCategory in categoryContent && (
          <CategoryDescription>
            {
              categoryContent[activeCategory as Exclude<Category, "all">]
                .description
            }
          </CategoryDescription>
        )}

        <PhotoGrid>
          {activeCategory in categoryContent &&
            categoryContent[
              activeCategory as Exclude<Category, "all">
            ].photos.map((photo, index) => (
              <Photo
                key={index}
                src={photo}
                alt={`${activeCategory} example ${index + 1}`}
              />
            ))}
        </PhotoGrid>
        <ProductGrid products={filteredProducts} loading={loading} />
      </MenuContainer>
      <Footer />
    </>
  );
};

export default Menu;
