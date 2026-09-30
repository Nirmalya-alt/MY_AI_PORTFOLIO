import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'portfolio-api-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api' || req.url === '/api/') {
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ message: "Portfolio AI Backend is running!" }));
          }
          if (req.url === '/api/portfolio') {
            try {
              const data = fs.readFileSync(path.resolve('portfolio.json'), 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              return res.end(data);
            } catch {
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ error: "Portfolio data unavailable" }));
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
})
