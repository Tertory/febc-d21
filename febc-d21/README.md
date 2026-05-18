# 💧 Daily Water Intake Calculator

A simple web application that calculates your recommended daily water intake based on your body weight.

## Features

- 🧮 **Water Intake Calculation** — Enter your weight (kg) and get your recommended daily water intake in milliliters (ml)
- 🌗 **Light / Dark Mode** — Toggle between light and dark themes for comfortable viewing

## How It Works

The calculator uses a standard formula:

```
Daily Water Intake (ml) = Weight (kg) × 2.2 × 30 / 2
```

> For example, a person weighing 60 kg should drink approximately **1,980 ml** of water per day.

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/febc-d21.git
   ```
2. Install dependencies:
   ```bash
   cd febc-d21
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## Usage

1. Enter your weight in kilograms
2. Click **Calculate**
3. See your recommended daily water intake in ml
4. Toggle the 🌙 / ☀️ button to switch between dark and light mode

## Project Structure

```
febc-d21/
├── public/
├── src/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Assignment

This project was built as part of a front-end web development course (FEBC).