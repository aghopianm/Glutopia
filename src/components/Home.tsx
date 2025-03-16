import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../store/productSlice";
import type { AppDispatch, RootState } from "../store/store";
import NavBar from "./NavBar";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import Review from "./Reviews";
import {
  Divider,
  HeroSection,
  HeroContent,
  Title,
  WelcomeText,
  DescriptionContainer,
  DescriptionBlock,
  BlockTitle,
  BlockText,
  CTAButton,
  Section,
} from "./HomeStyles";

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
          <Divider />
          <Review />
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
