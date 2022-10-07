import { Link } from "react-router-dom";

function CoktailsTorender({ filteredCocktails }) {
  return (
    <>
      {filteredCocktails.length > 0 ? (
        <>
          {filteredCocktails.map((cocktail) => {
            return (
              <Link
                to={`cocktail/${cocktail.idDrink}`}
                key={cocktail.idDrink}
                className="cocktail"
              >
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <h3>{cocktail.strDrink}</h3>
              </Link>
            );
          })}
        </>
      ) : (
        <h1>sorry, no drinks matched your search</h1>
      )}
    </>
  );
}

export default CoktailsTorender;
