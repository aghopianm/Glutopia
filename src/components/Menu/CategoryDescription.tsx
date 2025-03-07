
import { DescriptionContainer } from "./styles";
import { categoryContent } from "../data/menuData";
import { Category } from "./index";

interface CategoryDescriptionProps {
  category: Category;
}

const CategoryDescription = ({category}: CategoryDescriptionProps) => {
  if (!(category in categoryContent)) {
    return null;
  }

  return (
    <DescriptionContainer>
      {categoryContent[category].description}
    </DescriptionContainer>
  );
};

export default CategoryDescription;