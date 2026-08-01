// Displays the search input
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="🔍 Search Projects"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  );
}

export default SearchBar;
