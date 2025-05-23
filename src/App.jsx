// import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NotFound from "./pages/NotFound/NotFound";

import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CarDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
