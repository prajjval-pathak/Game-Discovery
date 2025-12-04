# Game Discover

A modern, responsive game discovery web application built with React, TypeScript, and Vite. Powered by the [RAWG API](https://rawg.io/apidocs), it allows users to browse, search, and explore details about thousands of video games.

![Game Discover Home Page](/public/screenshots/home-page.png)

## Features

*   **Browse Games:** Explore a vast library of games with infinite scrolling.
*   **Search & Filter:** Quickly find games by name, genre, platform, and more.
*   **Game Details:** View detailed information including descriptions, screenshots, trailers, and system requirements.
*   **Responsive Design:** Optimized for both desktop and mobile devices.
*   **Dark Mode:** Sleek dark-themed UI for comfortable viewing.
*   **Secure API:** Uses a Vercel Serverless Function proxy to securely handle API keys, preventing exposure in the browser.

## Tech Stack

*   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
*   **State Management:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
*   **UI Components:** [Chakra UI](https://chakra-ui.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Backend/Proxy:** [Vercel Serverless Functions](https://vercel.com/docs/functions)

## Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn
*   A [RAWG API Key](https://rawg.io/apidocs)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/game-discover.git
    cd game-discover
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your RAWG API key:
    ```env
    RAWG_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the `RAWG_API_KEY` environment variable in the Vercel project settings.
4.  Deploy!

The included `api/[...path].ts` function and `vercel.json` configuration will automatically handle API request proxying in production.

## Screenshots

### Game Details
![Game Detail Page](/public/screenshots/detail-page.png)
