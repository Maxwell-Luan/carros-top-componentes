import SearchButton from "../SearchButton";
import "./styles.css";

export default function SearchBar() {
  return (
      <form className="lm-search-bar">
        <input type="text" placeholder="Digite sua busca" />
        <SearchButton/>
      </form>
  );
}