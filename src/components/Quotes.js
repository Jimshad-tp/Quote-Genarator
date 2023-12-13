import React, { useState } from "react";
import "../components/Quotes.css";

function Quotes() {
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  const [quote, setQuote] = useState({
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Bridjo",
  });
  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  loadQuotes();
  return (
    <>
      <div className="container">
        <div className="quote">{quote.text}</div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author.split(",")[0]}</div>
          <div className="bookmark" >
       <h3>Add Bookmark</h3>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          random();
        }}
      >
        Generate New Quotes
      </button>
    </>
  );
}

export default Quotes;
