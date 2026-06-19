import { useState } from "react";
import "./GuessForm.css";

// Normalize text so small differences don't count as wrong:
// lowercase, drop anything in parentheses, strip punctuation, collapse spaces.
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Levenshtein edit distance — used for fuzzy (typo-tolerant) matching.
function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
}

function isCorrect(guess, answer) {
  const g = normalize(guess);
  const a = normalize(answer);
  if (!g) return false;
  if (g === a) return true;
  // Accept if the guess contains the answer or vice versa (handles partials).
  if (a.includes(g) || g.includes(a)) return true;
  // Fuzzy: allow a few typos, scaled to the length of the answer.
  const tolerance = Math.max(1, Math.floor(a.length * 0.2));
  return editDistance(g, a) <= tolerance;
}

function GuessForm({ answer, onResult }) {
  const [guess, setGuess] = useState("");
  // status is one of: "idle" | "correct" | "incorrect"
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!guess.trim()) return;
    const correct = isCorrect(guess, answer);
    setStatus(correct ? "correct" : "incorrect");
    if (onResult) onResult(correct); // report up so the parent can track streaks
  };

  const handleChange = (event) => {
    setGuess(event.target.value);
    if (status !== "idle") setStatus("idle"); // reset feedback as they retype
  };

  return (
    <form className="guess" onSubmit={handleSubmit}>
      <label className="guess__label" htmlFor="guess-input">
        Type your guess:
      </label>
      <div className="guess__row">
        <input
          id="guess-input"
          className={`guess__input guess__input--${status}`}
          type="text"
          placeholder="Your answer..."
          value={guess}
          onChange={handleChange}
        />
        <button className="guess__submit" type="submit">
          Submit
        </button>
      </div>

      {status === "correct" && (
        <p className="guess__feedback guess__feedback--correct">
          ✅ Correct! The Force is strong with you.
        </p>
      )}
      {status === "incorrect" && (
        <p className="guess__feedback guess__feedback--incorrect">
          ❌ Not quite — try again or flip the card.
        </p>
      )}
    </form>
  );
}

export default GuessForm;
