import { Container } from "react-bootstrap";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { query, collection } from "firebase/firestore";

// import Container from "../../components/Container";
import Banner from "../../components/Banner";
import NavSection from "../../components/NavBar";
import ProductsSection from "../../components/ProductsSection";
import { firestore } from "../../utils/firebase";

function Home() {
  const productsCollection = query(collection(firestore, "products"));
  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useFirestoreQueryData("products", productsCollection, {
    subscribe: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }

  const featuredProduct = products.find((product) => product.featured === true);
  console.log("featuredProduct", featuredProduct);

  return (
    <>
      <div>
        <NavSection />
      </div>
      <Container>
        <Banner product={featuredProduct} />
        <ProductsSection products={products} />
      </Container>
    </>
  );
}

export default Home;
