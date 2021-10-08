import { QueryClientProvider } from "react-query";

import Home from "./pages/Home";
import { client } from "./utils";

const App = () => {
  return (
    <div className="App">
      <Home />
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
