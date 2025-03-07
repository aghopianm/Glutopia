
import { PhotoGrid, Photo } from "./styles";
import { categoryContent } from "../data/menuData";
import { Category } from "./index";

type PhotoGalleryProps = {
  category: Category;
}

const PhotoGallery = ({ category } :PhotoGalleryProps) => {
  if (!(category in categoryContent)) {
    return null;
  } const photos = categoryContent[category].photos;
  
  // Then check if there are any photos
  if (photos.length === 0) {
    return null;
  }

  return (
    <PhotoGrid>
      {photos.map((photo, index) => (
        <Photo
          key={index}
          src={photo}
          alt={`${category} example ${index + 1}`}
        />
      ))}
    </PhotoGrid>
  );
};

export default PhotoGallery;