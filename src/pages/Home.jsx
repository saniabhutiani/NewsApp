import React from "react";
import NewsList from "../components/NewsList";

const Home = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Top Headlines</h2>
      <NewsList category="general" />
    </div>
  );
};

export default Home;
