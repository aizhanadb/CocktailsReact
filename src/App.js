import { Routes, Route } from "react-router-dom";
import Cocktails from "./components/Cocktails";
import SearchForm from "./components/SearchForm";
import SingleCocktail from "./components/SingleCocktail";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Cocktails />} />
      <Route path="cocktail/:id" element={<SingleCocktail />} />
    </Routes>
  );
}
