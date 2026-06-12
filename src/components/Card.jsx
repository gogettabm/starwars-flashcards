import { useState } from "react";
import "./Card.css";

function Card({ question, answer, category, emoji, image }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped((prev) => !prev);

  // Turn the category into a CSS-friendly class, e.g. "Easy" -> "card--easy"
  const categoryClass = category
    ? `card--${category.toLowerCase().replace(/\s+/g, "-")}`
    : "";

  return (
    <div className="card-scene" onClick={handleClick}>
      <div className={`card ${categoryClass} ${flipped ? "card--flipped" : ""}`}>
        <div className="card__face card__face--front">
          {category && <span className="card__category">{category}</span>}
          <span className="card__label">Question</span>
          {image ? (
            <img className="card__image" src={image} alt="" />
          ) : (
            emoji && <div className="card__emoji">{emoji}</div>
          )}
          <p>{question}</p>
        </div>
        <div className="card__face card__face--back">
          {category && <span className="card__category">{category}</span>}
          <span className="card__label">Answer</span>
          {emoji && <div className="card__emoji card__emoji--small">{emoji}</div>}
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;