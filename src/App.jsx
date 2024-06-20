import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home, Shop, ProductDetails } from "./router";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/product-details/:productId"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
