import { useState, useEffect } from "react";

const API_KEY = "a686f37b835b287f3f50a83409023992";

const useFetchNews = (category) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const selectedCategory = category || "general";

        const knownCategories = [
          "business",
          "sports",
          "technology",
          "general",
          "entertainment",
          "health",
          "science",
        ];

        let url = "";

        if (knownCategories.includes(selectedCategory)) {
          url = url = `https://api.allorigins.win/raw?url=https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&max=20&apikey=${API_KEY}`;
        } else {
          const q = encodeURIComponent(selectedCategory);
          url = url = `https://api.allorigins.win/raw?url=https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&max=20&apikey=${API_KEY}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();

        setArticles(data.articles || []);
      } catch (err) {
        console.error(err);
        setError("Error fetching news.");
      }
    };

    fetchNews();
  }, [category]);

  return { articles, error };
};

export default useFetchNews;