import { useState } from "react";
import Card from "./components/Card";
import GuessForm from "./components/GuessForm";
import cards from "./data/cards";
import "./App.css";

// Give every card a stable id up front so we can track which ones are
// mastered even after the deck is shuffled or reordered.
const initialDeck = cards.map((card, index) => ({ ...card, id: index }));

// Return a new array with the elements randomly reordered (Fisher–Yates).
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function App() {
  // deck = the active pool of cards (mastered cards are removed from it)
  const [deck, setDeck] = useState(initialDeck);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mastered, setMastered] = useState([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === deck.length - 1;

  const handlePrev = () => {
    if (!isFirst) setCurrentIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (!isLast) setCurrentIndex((i) => i + 1);
  };

  // Shuffle randomizes the deck order; cards otherwise stay in sequence.
  const handleShuffle = () => {
    setDeck((prev) => shuffle(prev));
    setCurrentIndex(0);
  };

  // Called by GuessForm whenever the user submits a guess.
  const handleResult = (correct) => {
    if (correct) {
      const next = currentStreak + 1;
      setCurrentStreak(next);
      if (next > longestStreak) setLongestStreak(next);
    } else {
      setCurrentStreak(0);
    }
  };

  // Remove the current card from the pool and add it to the mastered list.
  const handleMaster = () => {
    const card = deck[currentIndex];
    setMastered((prev) => [...prev, card]);
    setDeck((prev) => prev.filter((c) => c.id !== card.id));
    // Keep the index valid: if we removed the last card, step back one.
    setCurrentIndex((i) => Math.max(0, Math.min(i, deck.length - 2)));
  };

  const current = deck[currentIndex];
  const allMastered = deck.length === 0;

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__logo">⭐</div>
        <h1 className="app__title">Star Wars Flashcards</h1>
        <p className="app__description">
          Test your knowledge of the galaxy far, far away — from Jedi lore to
          iconic ships and villains.
        </p>
        <div className="app__count">
          {deck.length} cards left · {mastered.length} mastered
        </div>
      </header>

      <div className="app__streaks">
        <div className="streak">
          <span className="streak__num">{currentStreak}</span>
          <span className="streak__label">Current streak</span>
        </div>
        <div className="streak">
          <span className="streak__num">{longestStreak}</span>
          <span className="streak__label">Longest streak</span>
        </div>
      </div>

      <main className="app__main">
        {allMastered ? (
          <div className="app__done">
            <h2>🎉 You mastered every card!</h2>
            <p>The Force is truly strong with you.</p>
          </div>
        ) : (
          <>
            <Card
              key={`card-${current.id}`}
              question={current.question}
              answer={current.answer}
              category={current.category}
              emoji={current.emoji}
              image={current.image}
            />
            <p className="card-hint">Click the card to flip it</p>

            {/* Nested component: guess input + feedback.
                key resets its state whenever the card changes. */}
            <GuessForm
              key={`guess-${current.id}`}
              answer={current.answer}
              onResult={handleResult}
            />

            <div className="app__nav">
              <button
                className="app__nav-btn"
                onClick={handlePrev}
                disabled={isFirst}
              >
                ← Back
              </button>
              <span className="app__progress">
                {currentIndex + 1} / {deck.length}
              </span>
              <button
                className="app__nav-btn"
                onClick={handleNext}
                disabled={isLast}
              >
                Next →
              </button>
            </div>

            <div className="app__actions">
              <button className="app__action-btn" onClick={handleShuffle}>
                🔀 Shuffle
              </button>
              <button
                className="app__action-btn app__action-btn--master"
                onClick={handleMaster}
              >
                ✓ Mark as Mastered
              </button>
            </div>
          </>
        )}

        {mastered.length > 0 && (
          <section className="app__mastered">
            <h3 className="app__mastered-title">
              Mastered cards ({mastered.length})
            </h3>
            <ul className="app__mastered-list">
              {mastered.map((card) => (
                <li key={card.id}>
                  {card.emoji} {card.answer}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <footer className="app__footer">May the Force be with you 🌌</footer>
    </div>
  );
}

export default App;
