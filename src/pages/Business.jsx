import React from "react";
import NewsList from "../components/NewsList";

const Business = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Business News</h2>
      <NewsList category="business" />
    </div>
  );
};

export default Business;
