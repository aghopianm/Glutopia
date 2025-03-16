import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterButton } from "./styles";
import { Category } from "./index";
import { setCategory } from '../../store/menuSlice';
import { RootState } from '../../store/store';
import { useMemo } from 'react';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state: RootState) => state.menu.activeCategory);

  const categories = useMemo(() => [
    { id: 'weddings', label: 'Weddings' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'cupcakes', label: 'Cupcakes' },
    { id: 'prices', label: 'Price List' }
  ] as const, []);

  return (
    <FilterContainer>
      {categories.map(({ id, label }) => (
        <FilterButton
          key={id}
          active={activeCategory === id}
          onClick={() => dispatch(setCategory(id as Category))}
        >
          {label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter;