import React from "react";

const NewsItem = ({ title, description, url, imageUrl }) => {
  return (
    <div style={styles.card}>
      <img
        src={imageUrl || "https://picsum.photos/400/200"}
        alt="news"
        style={styles.image}
        onError={(e) => {
          e.target.src = "https://picsum.photos/400/200";
        }}
      />

      <h3 style={styles.title}>{title}</h3>

      <p style={styles.description}>
        {description
          ? description.slice(0, 120) + "..."
          : "Click read more to view full article."}
      </p>

      <a href={url} target="_blank" rel="noreferrer">
        <button style={styles.button}>Read More</button>
      </a>
    </div>
  );
};

export default NewsItem;

const styles = {
  card: {
    width: "450px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    paddingBottom: "15px",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },

  title: {
    fontSize: "18px",
    padding: "10px",
  },

  description: {
    fontSize: "14px",
    padding: "0 10px",
    color: "#555",
  },

  button: {
    marginLeft: "10px",
    marginTop: "10px",
    padding: "8px 15px",
    background: "#0d001a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};