import React from "react";
import NewsItem from "./NewsItem";
import useFetchNews from "../hooks/useFetchNews";

const NewsList = ({ category }) => {
  const { articles, loading, error } = useFetchNews(category);

  if (loading) {
    return <h3 style={{ textAlign: "center", marginTop: "20px" }}>Loading news...</h3>;
  }

  if (error) {
    return <h3 style={{ textAlign: "center", color: "red" }}>{error}</h3>;
  }
 return (
  <div className="cards-container">
    {articles.map((item, index) => (
      <NewsItem
        key={index}
        title={item.title}
        description={item.description}
        url={item.url}
        imageUrl={item.urlToImage}
      />
    ))}
  </div>
);
};

export default NewsList;
