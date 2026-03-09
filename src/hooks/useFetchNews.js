import { useState, useEffect } from "react";

const API_KEY = "a686f37b835b287f3f50a83409023992";

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
          url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&max=20&apikey=${API_KEY}`;
        } else {
          const q = encodeURIComponent(selectedCategory);
          url = `https://gnews.io/api/v4/search?q=${q}&lang=en&max=20&apikey=${API_KEY}`;
        }

        const response = await fetch(url);
        const data = await response.json();
           if (data.articles && data.articles.length > 0) {
           const uniqueArticles = data.articles.filter(
           (article, index, self) =>
            index ===self.findIndex(
             (a) => a.title === article.title || a.url === article.url
    )
);

setArticles(uniqueArticles);
        } else {
          setArticles([]);
          setError("No news articles found.");
        }

      } catch (err) {
        console.error(err);
        setError("Error fetching news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return { articles, loading, error };
};

export default useFetchNews;