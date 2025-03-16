import { memo } from 'react';
import { PhotoGrid, Photo } from "./styles";
import { categoryContent } from "../data/menuData";
import { Category } from "./index";

type PhotoGalleryProps = {
  category: Category;
}

const PhotoGallery = memo(({ category }: PhotoGalleryProps) => {
  if (!(category in categoryContent)) {
    return null;
  }
  
  const photos = categoryContent[category].photos;
  
  if (photos.length === 0) {
    return null;
  }

  return (
    <PhotoGrid>
      {photos.map((photo, index) => (
        <Photo
          key={`${category}-${index}`}
          src={photo}
          alt={`${category} example ${index + 1}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </PhotoGrid>
  );
});

PhotoGallery.displayName = 'PhotoGallery';

export default PhotoGallery;