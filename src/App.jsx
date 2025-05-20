// import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import NotFound from "./pages/notFound/NotFound";
import Header from "./components/header/header";
import CarDetailsPage from "./pages/carDetailsPage/CarDetailsPage";

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
    </>
  );
}

export default App;
