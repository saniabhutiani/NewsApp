import React from "react";
import NewsItem from "./NewsItem";

const NewsCard = ({ articles }) => {
  return (
    <div style={styles.container}>
      {articles.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          description={item.description}
          url={item.url}
          imageUrl={item.image}   
        />
      ))}
    </div>
  );
};

export default NewsCard;

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
  },
};