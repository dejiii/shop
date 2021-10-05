import styled from "styled-components";

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LargeText = styled.h1`
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  margin: 0;
  font-family: "Archivo", sans-serif;
`;

export const BlackButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px 30px;
  border: 0;
  text-transform: capitalize;

  width: ${(props) => (props.full ? "100%" : "")};
  position: ${(props) => (props.full ? "absolute" : "")};
  bottom: ${(props) => (props.full ? "0" : "")};
  left: ${(props) => (props.full ? "0" : "")};
  z-index: ${(props) => (props.full ? "5" : "")};
`;

export const BigText = styled.span`
  font-size: 30px;
  line-height: 32px;
  color: #000;
  display: inline;
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  flex-basis: 30%;

  @media screen and (max-width: 500px) {
    flex-basis: 100%;
  }
`;

export const ProductDeets = styled.div`
  position: relative;
`;

export const ProductFlag = styled.span`
  position: absolute;
  background: #fff;
  color: #000;
  padding: 5px;
`;

export const ProductCategory = styled.div`
  font-weight: 700;
  color: #656565;
  margin: 20px 0 0;
`;

export const ProductName = styled.div`
  font-size: 34px;
  line-height: 36px;
  font-weight: 700;
`;

export const ProductPrice = styled.div`
  color: #656565;
  font-weight: 400;
  font-size: 29px;
  line-height: 32px;
  margin: 10px 0 30px;

  ::before {
    content: "$";
  }
`;
