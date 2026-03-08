import React from "react";
import NewsList from "../components/NewsList";

const Technology = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Technology News</h2>
      <NewsList category="technology" />
    </div>
  );
};

export default Technology;
