import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import ProductGrid from './ProductGrid';
import type { RootState } from '../store/store';
import type { Product } from '../types/types';

const MenuContainer = styled.div`
  padding-top: 80px;
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-family: 'Playfair Display', serif;
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
  background-color: ${props => props.active ? 'var(--primary-color)' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: ${props => props.active ? 'var(--secondary-color)' : '#e5e5e5'};
  }
`;

type Category = 'all' |'weddings' | 'birthdays' | 'cupcakes';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('weddings');
  const { items, loading } = useSelector((state: RootState) => state.products);

  const filteredProducts = items.filter((product: Product) => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  });

  return (
    <>
      <NavBar />
      <MenuContainer>
        <Title>Our Delicious Selection</Title>
        <CategoryFilter>
          <FilterButton 
            active={activeCategory === 'weddings'} 
            onClick={() => setActiveCategory('weddings')}
          >
            Weddings
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'birthdays'} 
            onClick={() => setActiveCategory('birthdays')}
          >
            Birthdays
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'cupcakes'} 
            onClick={() => setActiveCategory('cupcakes')}
          >
            Cupcakes
          </FilterButton>
  
      
        </CategoryFilter>
        <ProductGrid products={filteredProducts} loading={loading} />
      </MenuContainer>
    </>
  );
};

export default Menu;