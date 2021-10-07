import { QueryClientProvider } from "react-query";

// import { Row, Col } from "antd";
// import Cart from "./icons/cart";
// import "antd/dist/antd.css";

import Home from "./pages/Home";
import { client } from "./utils";

// import Button from "react-bootstrap/Button";
const App = () => {
  return (
    <div className="App">
      {/* <div className="container"> */}
      <Home />
      {/* </div> */}
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
};
