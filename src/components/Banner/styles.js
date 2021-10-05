import styled from "styled-components";

export const BannerWrapper = styled.div`
  padding: 40px 0;
`;

export const FeaturedProduct = styled.div`
  height: 500px;
  background-color: #ddd;
  width: 100%;
  position: relative;
  background-image: url(${(props) => props.background}) no-repeat center;
  margin-top: 20px;
`;

export const PhotoTag = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  padding: 8px 30px;
`;

export const ProductTitle = styled.p`
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;
`;

export const ProductType = styled.span`
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;
  color: #656565;
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  width: 80%;
  color: #656565;
  margin-top: 10px;

  @media screen and (max-width: 500px) {
   width: 100%;
  }
`;

export const ProductSuggestions = styled.div`
  text-align: right;

  @media screen and (max-width: 500px) {
    text-align: left;
    margin-top: 20px;
  }
`;

export const DescText = styled.div`
  font-size: 16px;
  color: #656565;
  line-height: 32px;
  font-weight: 400;
`;
