# 📚 Psychological Book Recommender

An interactive web application that assesses your current state of mind through a curated psychological assessment and recommends the perfect book to match your mood.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)

## 🌟 Overview

The **Psychological Book Recommender** addresses "decision fatigue" in choosing what to read next. By analyzing three core psychological dimensions—**Stress**, **Escapism**, and **Logic**—the app logically maps your current mindset to a curated database of literature.

## ✨ Key Features

-   **🧠 Psychological Assessment:** A sequence of interactive questions designed to measure your emotional and mental state.
-   **⚖️ Euclidean Distance Algorithm:** A logical recommendation engine that calculates the closest match between your profile and book metadata.
-   **📖 Dynamic Virtual Covers:** Custom CSS-generated book covers that adapt to the recommended book's "mood color."
-   **🔍 Personalized Reasoning:** A detailed "Why this book?" section explaining the logical connection between your results and the recommendation.
-   **🎨 Visually Rich UI:** A modern, calming aesthetic built with Vanilla CSS and responsive design.

## 🛠️ Tech Stack

-   **Frontend:** React 19 (TypeScript)
-   **Build Tool:** Vite
-   **Styling:** Vanilla CSS (no external UI libraries for maximum customizability)
-   **Data Storage:** Local JSON-based curated database
-   **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/A4.git
    cd A4
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🧠 How it Works: The Recommendation Logic

The app measures users across three axes (0.0 to 1.0):
1.  **Stress:** Current level of mental pressure or fatigue.
2.  **Escapism:** The desire to disconnect from reality and enter an immersive world.
3.  **Logic:** Preference for analytical thinking and structured narratives.

The engine uses the **Euclidean Distance** formula to find the most compatible book:

$$d(p, q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + (p_3 - q_3)^2}$$

Where $p$ is the user's score and $q$ is the book's psychological profile. The book with the minimum distance is selected.

## 📂 Project Structure

```text
src/
├── components/      # React functional components
├── data/            # JSON databases (books, questions)
├── styles/          # Vanilla CSS modules
├── types.ts         # TypeScript interfaces
└── App.tsx          # Main application logic
```

## 📝 License

This project is licensed under the MIT License.
