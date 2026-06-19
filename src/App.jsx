import { useState } from "react";
import Card from "./components/Card";
import GuessForm from "./components/GuessForm";
import cards from "./data/cards";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === cards.length - 1;

  const handlePrev = () => {
    if (!isFirst) setCurrentIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (!isLast) setCurrentIndex((i) => i + 1);
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

        {/* Nested component: handles the guess input + feedback.
            key resets its internal state whenever the card changes. */}
        <GuessForm key={currentIndex} answer={current.answer} />

        <div className="app__nav">
          <button
            className="app__nav-btn"
            onClick={handlePrev}
            disabled={isFirst}
          >
            ← Back
          </button>
          <span className="app__progress">
            {currentIndex + 1} / {cards.length}
          </span>
          <button
            className="app__nav-btn"
            onClick={handleNext}
            disabled={isLast}
          >
            Next →
          </button>
        </div>
      </main>

      <footer className="app__footer">May the Force be with you 🌌</footer>
    </div>
  );
}

export default App;
