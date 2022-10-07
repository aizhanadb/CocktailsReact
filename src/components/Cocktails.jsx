import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import SearchForm from "./SearchForm";
import CocktailsToRender from "./CoktailsTorender";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";
      const res = await axios.get(url);
      const drinks = res.data.drinks;
      setCocktails(drinks);
      setFilteredCocktails(drinks);
    } catch (err) {
      console.err("Error getting cocktails");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const handleChange = (value) => {
    setInputValue(value);
    const copyCocktails = [...cocktails];
    const filtered = copyCocktails.filter((item) => {
      return item.strDrink.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredCocktails(filtered);
    // console.log(filteredCocktails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  // console.log(cocktails);

  return (
    <div>
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <section className="section cocktails">
        {loading && filteredCocktails.length === 0 ? (
          <Loader />
        ) : (
          <div className="section-center">
            <CocktailsToRender filteredCocktails={filteredCocktails} />
            );
          </div>
        )}
      </section>
    </div>
  );
}

export default Cocktails;
