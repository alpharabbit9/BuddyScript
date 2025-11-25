BuddyScript – MERN Social Media App

BuddyScript is a modern, fully-featured social media application built using the MERN stack with a fast Vite + React 19 frontend and a Node.js/Express + MongoDB backend.
It includes authentication, posting, comments, likes, profile management, news feed, and real-time UI updates using Zustand.

🚀 Features
🔐 Authentication

Login / Register using email & password

Google Login (Firebase Auth)

JWT-based authentication

Protected routes on frontend

👤 User Profile

Upload profile picture

Edit name, bio, email

View posts by user

Persistent user session storage

📝 Posts

Create posts with text & images

Upload multiple images

Real-time feed update (Zustand + optimistic updates)

Infinite scroll-ready structure

❤️ Likes & Comments

Like/unlike posts

Comment on posts

Auto-refresh and instant UI feedback

MongoDB relational population with user data

📰 Feed

Sorted by newest using timestamps

Smooth animations using Framer Motion

Scrolling with Lenis smooth scroll

⚡ State Management

Global state using Zustand

Dedicated stores for auth, posts, and UI

Persistent login state

🎨 Modern UI

Tailwind CSS v4

DaisyUI components

Responsive, clean, mobile-first design

🛠️ Tech Stack
Frontend

React 19

Vite

TailwindCSS 4

DaisyUI

Zustand

Axios

Firebase Auth

Lucide Icons

React Router DOM 7

Backend

Node.js

Express.js

MongoDB + Mongoose

BcryptJS for hashing

JWT for authentication

Multer (image upload)

Cloudinary (optional for image storage)




📦 Frontend package.json Overview
{
  "name": "client-site",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "axios": "^1.13.2",
    "firebase": "^12.6.0",
    "framer-motion": "^12.23.24",
    "lenis": "^1.3.15",
    "localforage": "^1.10.0",
    "lucide-react": "^0.554.0",
    "match-sorter": "^8.1.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-hot-toast": "^2.6.0",
    "react-router-dom": "^7.9.6",
    "sort-by": "^1.2.0",
    "tailwindcss": "^4.1.17",
    "zustand": "^5.0.8"
  }
}


📁 Project Structure
BuddyScript/
│
├── client-site/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/       # Zustand stores
│   │   ├── lib/
│   │   ├── assets/
│   │   └── main.jsx
│   └── index.html
│
└── server-site/         # Node.js backend
    ├── src/
    │   ├── models/
    │   ├── routes/
    │   ├── controllers/
    │   ├── middleware/
    │   └── index.js     # Main server file
    └── package.json





▶️ Running the App
Start Frontend
cd client-site
npm install
npm run dev

Start Backend
cd server-site
npm install
npm run dev

Backend runs at:
http://localhost:5000

Frontend runs at:
http://localhost:5173


🌍 Deployment Notes


Vite builds into /dist


For Vercel: ensure server index.js is in root or configured via vercel.json


API routes must follow:
/api/auth/*, /api/posts/*, etc.



🪲 Known Issues / Fixes


If Vercel shows 404 NOT_FOUND, you must:


Keep backend entry file at root (or configure builds in vercel.json)


Use "type": "module"


Set proper API paths /api/...





🤝 Contributing
PRs and suggestions are welcome!
You can fork, improve UI, add features like:


Realtime chat (Socket.io)


Story feature


Notifications


Friend requests



📜 License
MIT License – Free for personal and commercial use.
