import React, { useState } from "react";
import NewsList from "../components/NewsList.jsx";
import SearchBar from "../components/SearcBar.jsx";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Search News
      </h2>

      <SearchBar onSearch={handleSearch} />

      {searchTerm && <NewsList category={searchTerm} />}
    </div>
  );
};

export default Search;