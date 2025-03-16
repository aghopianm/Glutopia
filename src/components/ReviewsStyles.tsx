import styled from "styled-components";

export const SectionTitle = styled.h2`
text-align: center;
font-size: 2.5rem;
margin-bottom: 3rem;
font-family: "Playfair Display", serif;
color: #333;
`;

export const ReviewGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2.5rem;
margin-top: 2rem;
`;

export const ReviewCard = styled.div`
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

export const ReviewHeader = styled.div`
display: flex;
align-items: center;
gap: 1rem;
margin-bottom: 1rem;
`;

export const ReviewerImage = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
object-fit: cover;
`;

export const ReviewerInfo = styled.div`
display: flex;
flex-direction: column;
`;

export const ReviewText = styled.p`
font-size: 1.1rem;
line-height: 1.6;
color: #4a4a4a;
font-style: italic;
`;

export const ReviewAuthor = styled.p`
font-weight: 600;
color: #333;
font-family: "Playfair Display", serif;
font-size: 1.2rem;
margin-bottom: 0.2rem;
`;

export const ReviewDate = styled.span`
color: #666;
font-size: 0.9rem;
`;

export const StarsContainer = styled.div`
display: flex;
gap: 0.2rem;
color: #ffd700;
`;
