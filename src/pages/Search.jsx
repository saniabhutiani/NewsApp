import React, { useState } from "react";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Search News</h2>
      <SearchBar onSearch={(query) => setSearchTerm(query)} />
      {searchTerm && <NewsList category={searchTerm} />}
    </div>
  );
};

export default Search;
