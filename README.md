# Multiplayer Shiritori Game

A simplified two-player Shiritori Game built for the same screen, focusing on word validation, scoring, and history tracking.

🔗 **Shiritori Reference:** [shiritorigame.com](https://shiritorigame.com/)

---

## 🎮 Game Overview

**Shiritori** is a Japanese word game where:

* Players take turns entering words.
* Each new word **must begin with the last letter** of the previous word.
* Words **cannot be repeated**.
* Words must be **valid English words**.
* If a player fails to enter a valid word (or times out), they lose a point.

---



## 🛠️ Tech Stack

* **Frontend:** Vite React, TypeScript, Tailwind CSS, Shadcn UI
* **Word Validation:** [DictionaryAPI](https://dictionaryapi.dev/)
* **Hosting:**  Vercel

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
https://github.com/akashsaha02/shiritori-game
cd shiritori-game
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

App will be available at: `http://localhost:5173/`

### 4. Build for Production

```bash
npm run build
```

---

## 🎲 Gameplay Instructions

1. **Player 1 starts** by entering any valid English word (≥ 4 letters).
2. **Player 2** must then enter a word starting with the **last letter** of Player 1's word.

   * Example: `Apple → Eagle → Earth → ...`
3. Words **cannot be repeated** during the game.
4. If a player:

   * Fails to enter a valid word, **they lose a point**.
   * Runs out of time (countdown ends), **they lose a point**.
5. Scores are updated in real-time, and word history is displayed for reference.


## 📑 Rules Recap

* **Valid Word Check:** via [DictionaryAPI](https://dictionaryapi.dev/)
* **Minimum 4 letters** per word.
* **No repetitions** allowed.
* **Countdown timer** per turn.
* **Points deducted** for invalid or late entries.

---

## 🏆 Scoring System

* **+1 point** → Correct valid word within time.
* **-1 point** → Wrong word / Repeated word / Timeout.

---

## 📜 License

This project is developed for **Nyntax Assessment**. Free to use and extend for learning purposes.


