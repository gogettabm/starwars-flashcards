# Web Development Project - *Star Wars Flashcards! Part 2*

Submitted by: **Brayan Moafo**

This web app: **An interactive Star Wars trivia flashcard app. Each card shows a question about the Star Wars universe on the front and reveals the answer when clicked. Users can type a guess into an input box and submit it to get correct/incorrect feedback (with fuzzy matching for typos), step forward and backward through the ordered set of cards, shuffle the deck, track their current and longest correct-answer streaks, and mark cards as mastered to remove them from the pool. Cards are color-coded by difficulty (Easy / Medium / Hard) and feature thematic icons.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into a text box before seeing the flipside of the card**
  - [x] A clearly labeled input box is displayed on the card with a submit button
  - [x] Clicking the submit button with an **incorrect** answer shows visual feedback that it is incorrect
  - [x] Clicking the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button displayed on the card navigates to the next card in the set sequence when clicked
  - [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - [x] The next and back buttons are disabled (grayed out) at the end and beginning of the list, with no wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards stay in their fixed sequence unless the **Shuffle** button is clicked; clicking it randomizes the deck order (Fisher–Yates) and returns to the first card.
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - Guesses are normalized (case and punctuation discrepancies ignored, parenthetical text removed), partial matches are accepted, and minor typos are tolerated using Levenshtein edit distance.
- [x] A counter displays the user's current and longest streak of correct responses
  - The current streak increments on each correct guess and resets to 0 on an incorrect guess; the longest streak updates whenever the current streak exceeds it.
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - Clicking **Mark as Mastered** removes the card from the active pool and adds it to a separate list of mastered cards shown below.
- [x] A counter displays the user's current position within the list (e.g. `3 / 15`)
- [x] Cards contain images in addition to or in place of text
  - Each card displays a thematic emoji icon, and the `Card` component also supports real `<img>` images via an optional `image` field.
- [x] Cards have different visual styles such as color based on their category
  - Cards are color-coded by difficulty: Easy (green), Medium (amber), Hard (red), each with a matching category badge.

The following **additional** features are implemented:

* [x] A 3D flip animation when a card is turned over
* [x] Guess input and feedback live in a dedicated nested `GuessForm` component
* [x] Guess feedback resets automatically when the user retypes or changes cards
* [x] Themed Star Wars styling (starfield background, gold/blue color scheme)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The project uses **React + Vite**. For Part 2, the main challenges were getting the
fuzzy answer matching right (normalizing text and using Levenshtein edit distance so
small typos still count as correct) and making sure each card's guess input resets
its own state when navigating — solved by giving the nested `GuessForm` component a
React `key` tied to the current card index. The navigation buttons use a `disabled`
state derived from the current index so there's no wrap-around at the ends of the list.

## License

    Copyright 2026 Brayan Moafo

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
