# Web Development Project 2 - *Star Wars Flashcards*

Submitted by: **Brayan Moafo**

This web app: **An interactive Star Wars trivia flashcard app. Each card shows a question about the Star Wars universe on the front and reveals the answer when clicked. Cards are color-coded by difficulty (Easy / Medium / Hard) and feature thematic icons. A "Next Card" button shuffles to a random card so you can study in a non-sequential order.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description of the card set, and a list of card pairs**
  - [x] The card set title is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
  - [x] A single card is displayed at a time
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
- [x] **Clicking on the next button displays a random new card**
  - [x] Cards are not displayed in sequential order

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
  - Each card displays a thematic emoji icon, and the `Card` component also supports real `<img>` images via an optional `image` field.
- [x] Cards have different visual styles such as color based on their category
  - Cards are color-coded by difficulty: Easy (green), Medium (amber), Hard (red), each with a matching category badge.

The following **additional** features are implemented:

* [x] A 3D flip animation when a card is turned over
* [x] Difficulty badge displayed in the corner of every card
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

The project uses **React + Vite**. One early gotcha was that Vite uses `npm run dev`
(not `npm start`) and requires files containing JSX to use the `.jsx` extension.
Implementing the 3D flip with `backface-visibility` and a `rotateY` transform took
some iteration to get the front and back faces to align correctly.

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
