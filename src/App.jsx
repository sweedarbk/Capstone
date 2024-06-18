import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home, Shop } from "./router";
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
            path="/"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
