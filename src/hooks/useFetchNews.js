import { useState, useEffect } from "react";

const API_KEY = "b93bbc123f994b5dac26b00f2b34046b"; // keep or move to env

const useFetchNews = (category) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const selectedCategory = category || "general";

        const knownCategories = ["business", "sports", "technology", "general", "entertainment", "health", "science"];
        let url = "";

        if (knownCategories.includes(selectedCategory)) {
          url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`;
        } else {
          // treat as search query
          const q = encodeURIComponent(selectedCategory);
          url = `https://newsapi.org/v2/everything?q=${q}&pageSize=30&apiKey=${API_KEY}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ok" && data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          setError("No news articles found for this category/search.");
          setArticles([]);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching news data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return { articles, loading, error };
};

export default useFetchNews; 