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
  height: 90vh;
  background: linear-gradient(135deg, #ffe5e5 0%, #ffb6c1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333; // Changed to dark text since background is light now
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-family: "Playfair Display", serif;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
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
    transform: scale(1.05);
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ButterflyImage = styled.img`
  height: 60px;
  width: auto;
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
          <TitleWrapper>
            <ButterflyImage
              src="/images/butterfly-1.jpg"
              alt="Butterfly Logo"
            />
            <Title>Welcome to Glutopia Bakery</Title>
          </TitleWrapper>
          <Subtitle>
            Absolutely everything we bake is gluten free. We believe that
            everyone should be able to enjoy delicious treats, regardless of
            dietary restrictions.
          </Subtitle>
          <CTAButton onClick={() => navigate("/services")}>
            Explore our services
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
