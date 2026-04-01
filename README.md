
---

# 📇 Baseball Cards

*A simple way to remember people you meet*

## Overview

Baseball Cards is a full-stack web app that lets you create and manage digital “business cards” for people you meet. Instead of losing paper cards or forgetting names, you can store everything in one place—name, job, contact info, notes, and even an image.

I built this as a practical project to combine frontend, backend, and database work into something actually useful in real life.

---

## Features

* Create cards for people you meet
* Upload and display profile images
* Store useful details (job, workplace, contact info, notes)
* Edit and update cards anytime
* Delete cards you no longer need
* Search through your saved cards
* User authentication (each user sees only their own cards)
* Light/Dark mode toggle
* Responsive UI with horizontal card scrolling

---

## Tech Stack

**Frontend**

* React
* React Router
* Context API (for auth state)

**Backend**

* Node.js
* Express

**Database**

* PostgreSQL (via Knex.js)

**Other**

* Multer (image uploads)
* JWT (authentication)
* Docker (containerization)

---

## Getting Started

### Prerequisites

* Docker + Docker Compose installed
  OR
* Node.js + PostgreSQL (if running locally without Docker)

---

### Run with Docker (recommended)

```bash
git clone <your-repo-url>
cd <your-project-folder>

docker compose up
```

Then open:

```
http://localhost:3000
```

---

### Run without Docker

#### Backend

```bash
cd server
npm install
npm run dev
```

#### Frontend

```bash
cd client
npm install
npm start
```

Make sure PostgreSQL is running and your `.env` is configured.

---

## How It Works

* Users register/login → receive a JWT
* Token is stored in localStorage
* All API requests include the token for authentication
* Cards are tied to a user ID in the database
* Images are uploaded and stored on disk
* Frontend fetches and renders cards dynamically

---

## Project Structure

```
client/        → React frontend
server/        → Express backend
  controllers/ → route logic
  routes/      → API endpoints
  uploads/     → stored images
  db/          → knex config + migrations
```

---

## Future Improvements

* Full raspberry pi integration
* Mobile-friendly layout improvements
* Card sharing between users
* Export cards (PDF / QR code)
* Better search/filtering (by job, location, etc.)
* Image recognition for actual business cards

---

## Why I Built This

I wanted a project that wasn’t just “another CRUD app,” but something I could actually use in my job. This solves a real problem—remembering people and keeping track of connections—while also demonstrating full-stack development skills.

---

## Notes

This project is still evolving. Some features are basic by design, but the core functionality is solid and easy to extend.

---

## Author

Jordan P.

---


