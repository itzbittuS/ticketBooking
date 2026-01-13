# CineBook - Movie Ticket Booking App 🎬

A modern, premium movie ticket booking web application built with Node.js, Express, MongoDB, and EJS.

## Features
- Browse currently showing movies (seeded with real January 2026 titles like Avatar: Fire and Ash, Sinners, Superman, etc.)
- Select showtimes and dates
- Interactive 3D-style seat selection with price tiers
- Beautiful glassmorphism dark UI
- Admin panel to add new movies with poster upload
- Booking confirmation with QR code

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- EJS templates
- Multer for file uploads
- Bootstrap 5 + Custom CSS

## How to Run
```bash
git clone https://github.com/itzbittuS/ticketBooking.git
cd ticketBooking
npm install
node seed.js          # Seeds 17+ movies with showtimes
npm run dev
