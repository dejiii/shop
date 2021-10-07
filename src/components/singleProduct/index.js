import Im1 from "../../img/image1.png";
import {
  BlackButton,
  ProductCard,
  ProductCategory,
  ProductFlag,
  ProductDetails,
  ProductName,
  ProductPrice,
} from "../../utils/styles";

function SingleProduct({ product }) {
  const {
    bestseller,
    category,
    name,
    price,
    // image: { alt, src },
  } = product;
  return (
    <ProductCard>
      <ProductDetails>
        {bestseller ? <ProductFlag>bestseller</ProductFlag> : null}
        <img src={Im1} alt="" className="w-100" />
        <BlackButton full>ADD TO CART</BlackButton>
      </ProductDetails>

      <ProductCategory>{category}</ProductCategory>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </ProductCard>
  );
}

export default SingleProduct;
