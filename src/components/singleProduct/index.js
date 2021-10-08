// import Im1 from "../../img/image1.png";
import {
  BlackButton,
  ProductCard,
  ProductCategory,
  ProductFlag,
  ProductImage,
  ProductName,
  ProductPrice,
} from "../../utils/styles";

function SingleProduct({ product }) {
  const {
    bestseller,
    category,
    name,
    price,
    image: { alt, src },
  } = product;
  return (
    <ProductCard>
      <ProductImage props={{ alt, src }}>
        {bestseller ? <ProductFlag>bestseller</ProductFlag> : null}
        <img src={src} alt={alt} className="w-100 h-100" />
        <BlackButton full>ADD TO CART</BlackButton>
      </ProductImage>

      <ProductCategory>{category}</ProductCategory>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </ProductCard>
  );
}

export default SingleProduct;
