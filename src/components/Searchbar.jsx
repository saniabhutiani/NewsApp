import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      onSearch(trimmedQuery);
      setQuery(""); // optional: input clear after search
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news..."
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;

const styles = {
  form: {
    textAlign: "center",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid gray",
  },
  button: {
    padding: "10px 15px",
    marginLeft: "10px",
    border: "none",
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};