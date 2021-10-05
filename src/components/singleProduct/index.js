import Im1 from "../../img/image1.png";
import {
  BlackButton,
  ProductCard,
  ProductCategory,
  ProductFlag,
  ProductDeets,
  ProductName,
  ProductPrice,
} from "../../utils/styles";

function SingleProduct() {
  return (
    <ProductCard>
      <ProductDeets>
        <ProductFlag>Bestseller</ProductFlag>
        <img src={Im1} alt="" className="w-100" />
        <BlackButton full>ADD TO CART</BlackButton>
      </ProductDeets>

      <ProductCategory>People</ProductCategory>
      <ProductName>People</ProductName>
      <ProductPrice>3.89</ProductPrice>
    </ProductCard>
  );
}

export default SingleProduct;
