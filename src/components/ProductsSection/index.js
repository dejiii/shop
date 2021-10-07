import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Range from "../range";
import Sort from "../sort";
import Category from "../category";
import { BigText, FlexBetween, Products } from "../../utils/styles";
import SingleProduct from "../singleProduct";
import Pages from "../pagination";

const ProductSection = ({ products }) => {
  const [totalProducts, setTotalProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState([1]);
  const [productPerPage, setProductPerPage] = useState([6]);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = currentPage - postPerPage;
  const currentProducts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container className="mt-5">
      <FlexBetween>
        <BigText>Photography / Premium Photos</BigText>
        <Sort />
      </FlexBetween>
      <Row className="mt-5">
        <Col md="3">
          <Category />
          <hr />
          <Range />
        </Col>
        <Col md="9">
          <Products>
            {products.map((product) => {
              return <SingleProduct product={product} />;
            })}
          </Products>
          <div className="mx-auto">
            <Pages />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSection;
