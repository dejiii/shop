import SingleProduct from "../singleProduct";
import { Products } from "../../utils/styles";

function ProductList({ currentProducts }) {
  return (
    <Products>
      {currentProducts.map((product, index) => {
        return <SingleProduct key={index} product={product} />;
      })}
    </Products>
  );
}

export default ProductList;
