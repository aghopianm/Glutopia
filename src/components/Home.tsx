import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchProducts } from "../store/productSlice";
import type { AppDispatch, RootState } from "../store/store";
import NavBar from "./NavBar";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";

const HeroSection = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ffe5e5 0%, #ffb6c1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333; // Changed to dark text since background is light now
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 900px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Update existing Title
const Title = styled.h1`
  margin-top: 3rem;
  font-size: 3.5rem;
  margin-bottom: 2rem;
  font-family: "Playfair Display", serif;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

// Add new styled components
const WelcomeText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #4a4a4a;
  font-family: "Playfair Display", serif;
`;
const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DescriptionBlock = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlockTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
`;

const BlockText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a4a4a;
`;

const CTAButton = styled.button`
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  background-color: rgb(0, 170, 217);
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <HeroSection>
        <HeroContent>
          <Title>Welcome to Glutopia Bakery</Title>
          <WelcomeText>
            Your dream gluten-free bakery, where every bite is pure delight
          </WelcomeText>

          <DescriptionContainer>
            <DescriptionBlock>
              <BlockTitle>100% Gluten Free Artisan Bakery</BlockTitle>
              <BlockText>
                We are passionate about creating fresh, artisanal baked goods
                daily. From cakes and cupcakes to brownies, everything is
                crafted on-site with the finest gluten-free ingredients. We also
                offer vegan and dairy-free options.
              </BlockText>
            </DescriptionBlock>

            <DescriptionBlock>
              <BlockTitle>Bespoke Celebration Cakes</BlockTitle>
              <BlockText>
                We specialize in designing unique celebration cakes for every
                occasion - birthdays, weddings, christenings, and baby showers.
                Each cake is customized to make your special event truly
                memorable.
              </BlockText>
            </DescriptionBlock>

            <DescriptionBlock>
              <BlockTitle>Personal Consultation</BlockTitle>
              <BlockText>
                Get in touch with our team to arrange a one-to-one consultation.
                We'll work together to create the perfect cake that matches your
                vision and exceeds your expectations.
              </BlockText>
            </DescriptionBlock>

            <DescriptionBlock>
              <BlockTitle>Our Promise</BlockTitle>
              <BlockText>
                For those who felt like an afterthought when it comes to
                gluten-free food, we're changing the game. At Glutopia, you
                always come first, and quality is never compromised.
              </BlockText>
            </DescriptionBlock>
          </DescriptionContainer>

          <CTAButton onClick={() => navigate("/services")}>
            Explore Our Services
          </CTAButton>
        </HeroContent>
      </HeroSection>
      <Section>
        <ProductGrid products={items} loading={loading} />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
