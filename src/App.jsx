import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home } from "./router";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
