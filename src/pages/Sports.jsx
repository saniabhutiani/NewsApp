import React from "react";
import NewsList from "../components/NewsList";

const Sports = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Sports News</h2>
      <NewsList category="sports" />
    </div>
  );
};

export default Sports;
