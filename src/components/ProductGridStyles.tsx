import styled from  "styled-components";

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 2rem;
padding: 2rem;

@media (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
`;

export const LoadingSpinner = styled.div`
text-align: center;
padding: 2rem;
font-size: 1.2rem;
color: #666;
`;