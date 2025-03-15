import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: "Playfair Display", serif;
  color: #333;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
`;

const ReviewCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ReviewerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a4a4a;
  font-style: italic;
`;

const ReviewAuthor = styled.p`
  font-weight: 600;
  color: #333;
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const ReviewDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  color: #FFD700;
`;

const Reviews = () => {
  const reviews = [
    {
      text: "The most amazing gluten-free cakes I've ever tasted! You wouldn't even know they're gluten-free. Every bite is pure heaven.",
      author: "Sarah Mitchell",
      date: "March 2024",
      rating: 5,
      image: "/images/reviewer1.jpg"
    },
    {
      text: "Our wedding cake was absolutely perfect. The team went above and beyond to create exactly what we wanted. The attention to detail was incredible.",
      author: "James & Emma Thompson",
      date: "February 2024",
      rating: 5,
      image: "/images/reviewer2.jpg"
    },
    {
      text: "Finally, a bakery that takes gluten-free seriously without compromising on taste. The cupcakes are divine and the service is exceptional!",
      author: "Rachel Peterson",
      date: "March 2024",
      rating: 5,
      image: "/images/reviewer3.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <FaStar key={index} size={18} />
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
            <StarsContainer>
              {renderStars(review.rating)}
            </StarsContainer>
            <ReviewText>"{review.text}"</ReviewText>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </>
  );
};

export default Reviews;