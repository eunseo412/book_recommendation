# 📚 Psychological Book Recommender

An interactive, visually rich web application that provides personalized book recommendations based on a user's current psychological state.

## 🌟 What is this Project?

This web application aims to solve "decision fatigue" for readers by providing a single, logically-reasoned book recommendation. Instead of a generic list, it uses a psychological assessment to understand the user's current mood and mental state, mapping those results to a curated database of literature.

The core experience consists of:
1.  **A Psychological Assessment:** A targeted quiz measuring Stress, Escapism, and Analytical Thinking.
2.  **Logical Mapping:** A mathematical recommendation engine (Euclidean Distance) that pairs user results with book metadata.
3.  **Rich Visual Results:** A dedicated results page featuring dynamic "virtual book covers" and a personalized explanation of "Why this book?"

## 🛠️ Tools & Technologies

This project was developed using a modern, efficient development stack:

-   **Gemini CLI:** Used as the primary AI-driven development agent for project planning (PRD), architecture design, implementation, and documentation.
-   **React 19 & TypeScript:** The foundation for a robust, type-safe, and interactive user interface.
-   **Vite:** A lightning-fast build tool and development server.
-   **Vanilla CSS:** Pure CSS was used for all styling to ensure high performance and complete creative control without the overhead of external UI libraries.
-   **Vercel:** Chosen for seamless production deployment and hosting.

## 📂 Folder Structure

The project follows a clean, modular organization:

```text
A4/
├── src/
│   ├── components/      # Functional React components (UI units)
│   │   ├── LandingPage.tsx   # Welcome screen with CSS artwork
│   │   ├── Quiz.tsx          # Interactive assessment logic
│   │   └── ResultPage.tsx    # Recommendation engine output & dynamic visuals
│   ├── data/            # Static JSON "databases"
│   │   ├── books.json        # Curated book list with psychological metadata
│   │   └── questions.json    # The psychological assessment questions
│   ├── styles/          # Pure Vanilla CSS files for each component
│   │   ├── LandingPage.css
│   │   ├── Quiz.css
│   │   └── ResultPage.css
│   ├── types.ts         # Centralized TypeScript interfaces/types
│   ├── App.tsx          # Root component managing application state & routing
│   └── main.tsx         # Application entry point
├── public/              # Static assets (favicons, etc.)
├── book-recommender-prd.md # The official Product Requirements Document
├── README.md            # Project documentation (this file)
├── package.json         # Dependency management & build scripts
└── vite.config.ts       # Vite configuration
```

## 🧠 Recommendation Logic: The Algorithm

The application measures users across three psychological axes (scored 0.0 to 1.0):
1.  **Stress:** Measures current mental pressure.
2.  **Escapism:** Measures the need to "get away" into a fictional world.
3.  **Logic:** Measures the preference for structured, analytical narratives.

The recommendation engine calculates the **Euclidean Distance** between the user's result vector and the metadata vectors of every book in the database:

$$d(p, q) = \sqrt{\sum_{i=1}^{n} (p_i - q_i)^2}$$

The book with the **minimum distance** (the "closest match") is presented to the user.

## 🚀 Getting Started

1.  **Install:** `npm install`
2.  **Develop:** `npm run dev`
3.  **Build:** `npm run build`
4.  **Deploy:** `vercel --prod`

## 📝 License

This project is licensed under the MIT License.
