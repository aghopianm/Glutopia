import styled from "styled-components";

export const MenuContainer = styled.div`
  padding-top: 80px;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-family: "Playfair Display", serif;
  margin: 2rem 0;
`;

// Category Filter styles
export const FilterContainer = styled.div`
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

export const FilterButton = styled.button<{ active: boolean }>`
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

// Description styles
export const DescriptionContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

// Photo Gallery styles
export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Photo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Price List styles
export const PriceSection = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const PriceCategory = styled.div`
  margin-bottom: 2rem;
`;

export const PriceCategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  text-align: center;
`;

export const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

export const PriceNote = styled.p`
  margin-top: 1rem;
  font-style: italic;
  color: #666;
  text-align: center;
`;