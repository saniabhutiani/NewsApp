import React from "react";
import NewsItem from "./NewsItem";

const NewsCard = ({ articles }) => {
  return (
    <div style={styles.container}>
      {articles.map((item, index) => {

        const imageUrl =
          item.image && !item.image.includes("placeholder")
            ? item.image
            : `https://source.unsplash.com/400x250/?news,${index}`;

        return (
          <NewsItem
            key={index}
            title={item.title}
            description={item.description}
            url={item.url}
            imageUrl={imageUrl}
          />
        );
      })}
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