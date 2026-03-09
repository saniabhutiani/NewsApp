import React from "react";

const NewsItem = ({ title, description, url, imageUrl }) => {
  return (
    <div className="card">
      <img
  src={
    imageUrl && imageUrl.startsWith("http")
      ? imageUrl
      : "https://images.unsplash.com/photo-1495020689067-958852a7765e"
  }
  alt="news"
/>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>

       <a href={url} target="_blank"  rel="noopener noreferrer" className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;