import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FlexBetween, BlackButton, LargeText } from "../../utils/styles";
import {
  BannerWrapper,
  FeaturedProduct,
  PhotoTag,
  ProductTitle,
  ProductType,
  ProductDescription,
  ProductSuggestions,
  DescText,
} from "./styles";
import P1 from "../../img/p1.png";
import P2 from "../../img/p3.png";
import P3 from "../../img/p3.png";

function Banner() {
  return (
    <Container>
      <BannerWrapper>
        <FlexBetween>
          <LargeText>Samurai King Resting</LargeText>
          <BlackButton>ADD TO CART</BlackButton>
        </FlexBetween>
        <FeaturedProduct
          background={`data:image/jpeg;base64,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`}
        >
          <PhotoTag>Photo of the day</PhotoTag>
        </FeaturedProduct>
      </BannerWrapper>
      <Row>
        <Col md="8">
          <ProductTitle>About the Samurai King Resting</ProductTitle>
          <ProductType>Pet</ProductType>
          <ProductDescription>
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder
            <br /> <br /> text to mockup various fonts for a type specimen
            book.So how did the classical Latin become so incoherent? According
            to McClintock.
          </ProductDescription>
        </Col>
        <Col md="4">
          <ProductSuggestions>
            <ProductTitle>People also buy</ProductTitle>
            <FlexBetween>
              <img src={P1} alt="" />
              <img src={P2} alt="" />
              <img src={P3} alt="" />
            </FlexBetween>
            <div className="mt-4">
              <ProductTitle>Product Details</ProductTitle>
            </div>
            <DescText>Size: 1020 x 1020 pixel</DescText>
            <DescText>Size: 15mb</DescText>
          </ProductSuggestions>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
