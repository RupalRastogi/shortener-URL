# 📌 URL Shortener
A simple and efficient URL Shortener built using Node.js, Express, MongoDB, and EJS, following the MVC (Model–View–Controller) design pattern.
This project allows users to shorten long URLs, track visit history, and manage their URLs after authentication.

# ✨ Features

🔗 Shorten long URLs into unique short links

📊 Track visit history with timestamps

👤 User authentication (Signup & Login)

🔒 Role-based access control (e.g., NORMAL, ADMIN)

🍪 Secure authentication using cookies/JWT

🎨 Dynamic views using EJS templates

# 📂 Project Structure
url-shortener/
│── models/          # Mongoose schemas (User, URL) → Model
│── routes/          # Route handlers (user, url, static pages) → Controller
│── middleware/      # Authentication & Authorization
│── views/           # EJS templates → View
│── service/         # Auth service helpers
│── connect.js       # MongoDB connection setup
│── index.js         # Main Express app entry
│── package.json
│── README.md

