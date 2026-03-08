import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#222",
        padding: "10px 20px",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>NewsApp</h2>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/business" style={{ color: "white", textDecoration: "none" }}>
            Business
          </Link>
        </li>
        <li>
          <Link to="/sports" style={{ color: "white", textDecoration: "none" }}>
            Sports
          </Link>
        </li>
        <li>
          <Link to="/technology" style={{ color: "white", textDecoration: "none" }}>
            Technology
          </Link>
        </li>
        <li>
          
          <button
            onClick={handleSearchClick}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
