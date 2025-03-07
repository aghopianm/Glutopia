
import { FilterContainer, FilterButton } from "./styles";
import { Category } from "./index";

type CategoryFilterProps = {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <FilterContainer>
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
      <FilterButton
        active={activeCategory === "prices"}
        onClick={() => setActiveCategory("prices")}
      >
        Price List
      </FilterButton>
    </FilterContainer>
  );
};

export default CategoryFilter;