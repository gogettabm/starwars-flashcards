import { useState } from "react";
import Card from "./components/Card";
import cards from "./data/cards";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * cards.length);
    } while (nextIndex === currentIndex && cards.length > 1);
    setCurrentIndex(nextIndex);
  };

  const current = cards[currentIndex];

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__logo">⭐</div>
        <h1 className="app__title">Star Wars Flashcards</h1>
        <p className="app__description">
          Test your knowledge of the galaxy far, far away — from Jedi lore to
          iconic ships and villains.
        </p>
        <div className="app__count">{cards.length} cards in this set</div>
      </header>

      <main className="app__main">
        <Card
          key={currentIndex}
          question={current.question}
          answer={current.answer}
          category={current.category}
          emoji={current.emoji}
          image={current.image}
        />
        <p className="card-hint">Click the card to flip it</p>
        <button className="app__next-btn" onClick={handleNext}>
          Next Card →
        </button>
      </main>

      <footer className="app__footer">May the Force be with you 🌌</footer>
    </div>
  );
}

export default App;
