# Portfolio AI

React/Vite portfolio with a FastAPI backend for the portfolio chat assistant. Contact is handled by a `mailto:` link in the visitor's email client.

## Run locally

1. Copy `backend/.env.example` to `backend/.env` and fill in `GEMINI_API_KEY`.
2. Start the app with `start-portfolio.bat`, or run the backend (`npm run server`) and frontend (`npm run dev`) in separate terminals.
3. Open the Vite URL printed in the terminal. The Vite development proxy forwards `/api/chat` to the local FastAPI server.

The Contact Me section opens a draft addressed to `nirmalyachatterjee617@gmail.com` in the visitor's default email application. It does not submit visitor data to a backend.
