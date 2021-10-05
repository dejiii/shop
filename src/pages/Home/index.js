import { Container } from "react-bootstrap";
// import Container from "../../components/Container";
import Banner from "../../components/Banner";
import NavSection from "../../components/NavBar";
import ProductsSection from "../../components/ProductsSection";

function Home() {
  return (
    <>
      <div>
        <NavSection />
      </div>
      <Container>
        <Banner />
        <ProductsSection />
      </Container>
    </>
  );
}

export default Home;
