# Product Requirements Document (PRD): Psychological Book Recommender

## Product Overview
This project is an interactive web application that assesses a user's psychological state through a short quiz and recommends a single, highly relevant book based on the results. The main idea is to provide a logical, curated connection between a person's current emotional or mental state and a specific piece of literature. It addresses the common problem of "decision fatigue" when choosing what to read next by offering a personalized, definitive, and reasoned suggestion rather than a generic list.

## Target Users
*   **Avid Readers:** People looking for their next engaging read but overwhelmed by choices. They need a curated, trustworthy recommendation.
*   **Casual Readers & Explorers:** Individuals interested in personality quizzes and self-reflection who might be encouraged to read a book that resonates with their current mindset.
*   **Expected Usage Scenario:** A user feeling stressed after a long work week takes the 2-minute quiz and receives a recommendation for an immersive, escapist fantasy novel, complete with a detailed explanation of why it fits their current need to disconnect.

## Project Goals
*   **Deliver a Personalized Experience:** Ensure every user feels the book recommendation is uniquely tailored to their quiz results.
*   **Maintain Logical Accuracy:** The recommendation algorithm must logically map psychological traits (e.g., stress, analytical thinking, desire for escapism) to specific book metadata and themes.
*   **Provide High Visual Engagement:** The result page must be visually rich, aesthetically pleasing, and reflect the mood of the recommended book.
*   **Ensure Seamless UX:** The quiz flow should be intuitive, fast, and friction-free.

## Core User Scenario
1.  **Arrival:** The user arrives at the landing page and reads a brief, compelling introduction about discovering a book tailored to their current state of mind.
2.  **Assessment:** The user clicks "Start Quiz" and answers 5-7 questions (e.g., using sliders to rate their current stress level, preference for reality vs. fantasy, and emotional vs. logical thinking).
3.  **Processing:** After submitting the final answer, a brief, visually engaging loading animation plays, simulating the algorithm analyzing their profile.
4.  **Recommendation:** The user is presented with a visually rich result page. They see a large, clear image of the recommended book's cover, a breakdown of their psychological profile, and a personalized paragraph explaining *why* this specific book is perfect for them right now.

## Feature List
*   **Interactive Psychological Quiz:** A sequence of 5-7 questions measuring different psychological axes. (*Priority: Must-have*)
*   **Curated Book Database:** A local JSON database of selected books tagged with psychological metadata. (*Priority: Must-have*)
*   **Recommendation Engine:** An algorithm that calculates the closest match between the user's score and the book database. (*Priority: Must-have*)
*   **Dynamic "Reasoning" Text Generation:** Logic to construct a personalized explanation for the recommendation. (*Priority: Must-have*)
*   **Thematic Result Page:** A visually rich page that dynamically changes styling/colors based on the recommended book's mood. (*Priority: Should-have*)
*   **Social Sharing:** A button allowing users to share their result and book recommendation on social media. (*Priority: Nice-to-have*)

## Page Structure
*   **Home Page (Landing):** Introduction, value proposition, and the "Start Quiz" call-to-action button.
*   **Quiz Section (Interactive):** The sequential question interface (handled via state without full page reloads).
*   **Loading State (Interstitial):** A brief visual transition showing the algorithm at work.
*   **Result Page:** The final display of the recommended book, the user's profile summary, the logical reasoning, and dynamic styling.

## Technical Requirements
*   **Frontend Framework:** React (using TypeScript for type safety and maintainability) bootstrapped via Vite.
*   **Data Storage:** A local `data.json` file acting as the curated database for books and their psychological metadata.
*   **Styling:** Vanilla CSS (`.css` or `.module.css`) to ensure customizability without relying on external UI libraries.
*   **Deployment:** Static site deployment via Vercel.

## Design Requirements
*   **Visual Style:** Modern, clean, and calming. The design should feel slightly introspective, perhaps utilizing soft gradients and abstract shapes.
*   **Layout:** Centered, focused layouts. The quiz should present one question at a time to maintain focus. The result page should hero the book cover.
*   **Color Direction:** The initial pages should use a neutral, calming palette (e.g., soft blues, off-whites). The result page's color scheme should dynamically adapt to reflect the mood of the selected book (e.g., dark/moody for a thriller, bright/warm for a romance).
*   **Navigation Structure:** Linear progression (Home -> Quiz -> Result) with a clear option to "Retake Quiz" at the end.
*   **User Experience Principles:** Minimize cognitive load during the quiz; maximize visual impact and clarity on the result page.

## Milestones
*   **Milestone 1: PRD & Design Approval:** Finalize the requirements and visual direction.
*   **Milestone 2: Data Modeling & Setup:** Define the psychological axes, create the JSON database of books, and initialize the React project.
*   **Milestone 3: Core Logic & First Prototype:** Implement the quiz flow UI, state management, and the core recommendation algorithm.
*   **Milestone 4: Visual Polish & Dynamic Styling:** Build out the rich result page, integrating dynamic CSS based on the book's mood.
*   **Milestone 5: Final Testing & Vercel Deployment:** Conduct thorough testing across devices and deploy the application to Vercel.