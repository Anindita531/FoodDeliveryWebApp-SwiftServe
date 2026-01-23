🍔 SwiftServe – Food Delivery Web App

SwiftServe is a full-stack food delivery web application that allows users to browse restaurants, place orders, and track deliveries in real-time. It also provides an Admin interface to manage restaurants, menus, and orders efficiently.

🌐 Features

Client (User) Side:

Browse available restaurants and menus

Search and filter dishes

Add items to cart and place orders

View order history and status

Responsive, user-friendly interface

Admin Side:

Manage restaurants, menus, and categories

View and manage all orders

Track order status

Dashboard for monitoring user activity

Backend:

RESTful APIs for users, orders, and menu management

Authentication and role-based access (Admin/User)

MySQL database with ORM for data management

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript (React/Vanilla JS)

Backend: Node.js, Express.js

Database: MySQL

Tools: ORM for database, API testing with Postman

📂 Project Structure
FoodDeliveryWebApp-SwiftServe/
│
├── Q_Backend-main/          # Node.js backend code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── Q_frontend_Admin-main/   # Admin panel frontend
│   ├── index.html
│   ├── css/
│   └── js/
│
└── Q_frontend_Clints-main/  # Client-facing frontend
    ├── index.html
    ├── css/
    └── js/

⚡ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Anindita531/FoodDeliveryWebApp-SwiftServe.git
cd FoodDeliveryWebApp-SwiftServe

2️⃣ Setup Backend
cd Q_Backend-main
npm install        # Install dependencies
npm start          # Start backend server (default: localhost:5000)


Make sure to configure MySQL database and update config.js or .env with DB credentials.

3️⃣ Setup Frontend (Client & Admin)
# Admin frontend
cd ../Q_frontend_Admin-main
# open index.html in browser or serve using Live Server

# Client frontend
cd ../Q_frontend_Clints-main
# open index.html in browser or serve using Live Server

🔑 Usage

Open the client frontend to browse restaurants and place orders.

Open the admin frontend to manage menu items, restaurants, and orders.

All data is stored in the MySQL database, and backend APIs handle requests from both frontends.

🧩 Future Enhancements

Add payment gateway integration for online payments

Real-time order tracking using WebSockets

Email/SMS notifications for order updates

Mobile-responsive design improvements

📄 License

This project is open-source and available under the MIT License
.
