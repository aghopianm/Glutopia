
import { FaStar } from "react-icons/fa";
import {
  SectionTitle,
  ReviewGrid,
  ReviewCard,
  ReviewHeader,
  ReviewerImage,
  ReviewerInfo,
  ReviewText,
  ReviewAuthor,
  ReviewDate,
  StarsContainer
} from "./ReviewsStyles";

const Reviews = () => {
  const reviews = [
    {
      text: "The most amazing gluten-free cakes I've ever tasted! You wouldn't even know they're gluten-free. Every bite is pure heaven.",
      author: "Sarah Mitchell",
      date: "March 2024",
      rating: 5,
      image: "/images/reviewer1.jpg",
    },
    {
      text: "Our wedding cake was absolutely perfect. The team went above and beyond to create exactly what we wanted. The attention to detail was incredible.",
      author: "James & Emma Thompson",
      date: "February 2024",
      rating: 5,
      image: "/images/reviewer2.jpg",
    },
    {
      text: "Finally, a bakery that takes gluten-free seriously without compromising on taste. The cupcakes are divine and the service is exceptional!",
      author: "Rachel Peterson",
      date: "March 2024",
      rating: 5,
      image: "/images/reviewer3.jpg",
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        size={18}
        color={index < rating ? "#FFD700" : "#e4e5e9"}
      />
    ));
  };

  return (
    <>
      <SectionTitle>What Our Customers Say</SectionTitle>
      <ReviewGrid>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewHeader>
              <ReviewerImage src={review.image} alt={review.author} />
              <ReviewerInfo>
                <ReviewAuthor>{review.author}</ReviewAuthor>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewerInfo>
            </ReviewHeader>
            <StarsContainer>{renderStars(review.rating)}</StarsContainer>
            <ReviewText>"{review.text}"</ReviewText>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </>
  );
};

export default Reviews;
