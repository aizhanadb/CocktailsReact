import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});
  const [loading, setLoading] = useState(false);
  // console.log(id);

  const fetchSingleCocktail = async () => {
    setLoading(true);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    setLoading(true);
    try {
      const res = await axios.get(url);
      const SingleCocktail = res.data.drinks[0];
      setCocktail(SingleCocktail);
      console.log(cocktail.strDrink);
      console.log(cocktail);
    } catch (err) {
      console.err("Error feching single cocktail", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchSingleCocktail();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="single-drink">
          <img src={cocktail.strDrinkThumb} className="drink-img" />
          <article className="drink-info">
            <h2 className="drink-name">{cocktail.strDrink}</h2>
            <p className="drink-desc">{cocktail.strInstructions}</p>
            <ul class="drink-ingredients">
              <li>
                <i class="far fa-check-square"></i>
                {cocktail.strIngredient1}
              </li>
              <li>
                <i class="far fa-check-square"></i>
                {cocktail.strIngredient2}
              </li>
              <li>
                <i class="far fa-check-square"></i>
                {cocktail.strIngredient3}
              </li>
              <li>
                <i class="far fa-check-square"></i>
                {cocktail.strIngredient4}
              </li>
            </ul>

            <Link to="/" className="btn">
              All cocktails
            </Link>
          </article>
        </section>
      )}
    </>
  );
};

export default SingleCocktail;
