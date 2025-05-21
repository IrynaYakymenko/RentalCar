// import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import NotFound from "./pages/notFound/NotFound";

import CarDetailsPage from "./pages/carDetailsPage/CarDetailsPage";
import Header from "./components/header/Header";
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
