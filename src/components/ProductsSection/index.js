import { Col, Container, Row } from "react-bootstrap";
import Range from "../range";
import Category from "../category";
import { BigText, FlexBetween } from "../../utils/styles";
import ProductList from "../productsList";

function index() {
  return (
    <Container className="mt-5">
      <FlexBetween>
        <BigText>Photography / Premium Photos</BigText>
        <p>Right</p>
      </FlexBetween>
      <Row className="mt-5">
        <Col md="3">
          <Category />
          <hr />
          <Range />
        </Col>
        <Col md="9">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}

export default index;
