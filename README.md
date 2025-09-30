A simple and efficient URL Shortener built using Node.js, Express, MongoDB, and EJS, following the MVC (Model–View–Controller) design pattern.
This project allows users to shorten long URLs, track visit history, and manage their URLs after authentication.

✨ Features

🔗 Shorten long URLs into unique short links

📊 Track visit history with timestamps

👤 User authentication (Signup & Login)

🔒 Role-based access control (e.g., NORMAL, ADMIN)

🍪 Secure authentication using cookies/JWT

🎨 Dynamic views using EJS templates

📂 Project Structure
url-shortener/
│── models/          # Mongoose schemas (User, URL)
│── routes/          # Route handlers (user, url, static pages)
│── middleware/      # Authentication & Authorization middleware
│── views/           # EJS templates (home, login, signup)
│── service/         # Auth service helpers
│── connect.js       # MongoDB connection setup
│── index.js         # Main Express app
│── package.json
│── README.md
