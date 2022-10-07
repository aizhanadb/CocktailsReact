function SearchForm({ handleChange, handleSubmit, inputValue, setInputValue }) {
  console.log(inputValue);
  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Cocktails API</h2>
      <input
        type="text"
        placeholder="search your favorite cocktail"
        name="drink"
        onChange={(e) => handleChange(e.target.value)}
        value={inputValue}
      />
    </form>
  );
}

export default SearchForm;
