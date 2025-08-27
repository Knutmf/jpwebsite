import React, { useEffect, useState } from "react";

export default function MerchComponent() {
  const [merchItems, setMerchItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with your Spring service endpoint when ready
    const springServiceUrl = "https://example.com/api/merch"; 

    fetch(springServiceUrl)
      .then((res) => res.json())
      .then((data) => {
        setMerchItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch merch items:", err);
        // fallback: use hardcoded items until Spring service is available
        setMerchItems([
          {
            id: 1,
            title: "Medieval Style T-Shirt",
            description:
              "Soft cotton t-shirt featuring a vintage medieval design inspired by the world of Scolf.",
            imageUrl:
              "https://via.placeholder.com/300x400?text=T-Shirt+Design",
            price: 29.99,
            buyLink: "#",
          },
          {
            id: 2,
            title: "Medieval Hoodie",
            description: "Cozy hoodie with medieval-inspired artwork.",
            imageUrl:
              "https://via.placeholder.com/300x400?text=Hoodie+Design",
            price: 49.99,
            buyLink: "#",
          },
        ]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading merch...</p>;

  return (
    <section className="merch-section">
      <h2 className="merch-heading">Shop Our Medieval-Inspired Merch</h2>

      <div className="merch-grid">
        {merchItems.map((item) => (
          <div key={item.id} className="merch-card">
            <img src={item.imageUrl} alt={item.title} className="merch-image" />
            <h3 className="merch-title">{item.title}</h3>
            <p className="merch-description">{item.description}</p>
            <p className="merch-price">${item.price.toFixed(2)}</p>
            <a href={item.buyLink} target="_blank" rel="noopener noreferrer">
              <button className="buy-button">Buy Now</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}