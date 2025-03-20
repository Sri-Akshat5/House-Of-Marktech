import { useState, useEffect } from "react";
import Trie from "../utils/Trie";

const SearchBar = ({ users }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const trie = new Trie();

  useEffect(() => {
    users.forEach((user) => trie.insert(user.name));
  }, [users]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      setSuggestions(trie.search(value));
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="py-6 text-center">
      <input
        type="text"
        className="p-3 w-80 border border-gray-300 rounded-lg"
        placeholder="Search users..."
        value={query}
        onChange={handleSearch}
      />
      {suggestions.length > 0 && (
        <ul className="mt-2 bg-white shadow-lg rounded-lg p-4 w-80 mx-auto">
          {suggestions.map((name, index) => (
            <li key={index} className="py-2 border-b last:border-none">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
