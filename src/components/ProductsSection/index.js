import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Range from "../range";
import Sort from "../sort";
import Category from "../category";
import { BigText, FlexBetween, Products } from "../../utils/styles";
import SingleProduct from "../singleProduct";
import Pages from "../pagination";
import ProductList from "../productsList";
import Pagination from "../pagination";

const ProductSection = ({ products }) => {
  const [totalProducts, setTotalProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState([1]);
  const [productPerPage, setProductPerPage] = useState([6]);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNext = () => {
    //
    setCurrentPage((prevState) => prevState + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const handleJumpTo = (number) => {
    setCurrentPage(number);
  };

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
          <ProductList currentProducts={currentProducts} />
          <div className="mx-auto">
            <Pagination
              productPerPage={6}
              totalProducts={21}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleJumpTo={handleJumpTo}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSection;
