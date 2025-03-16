
import { 
  PriceSection, 
  PriceCategory, 
  PriceCategoryTitle, 
  PriceItem, 
  PriceNote 
} from "./styles";
import { priceList } from "../data/menuData";

const PriceList = () => {
  return (
    <PriceSection>
      <PriceCategory>
        <PriceCategoryTitle>{priceList.cakes.title}</PriceCategoryTitle>
        {priceList.cakes.items.map((item, index) => (
          <PriceItem key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </PriceItem>
        ))}
        <PriceNote>{priceList.cakes.note}</PriceNote>
      </PriceCategory>

      <PriceCategory>
        <PriceCategoryTitle>{priceList.cupcakes.title}</PriceCategoryTitle>
        {priceList.cupcakes.items.map((item, index) => (
          <PriceItem key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </PriceItem>
        ))}
      </PriceCategory>
    </PriceSection>
  );
};

export default PriceList;