🛒 Micro Marketplace

A full-stack Micro Marketplace application where users can register, log in, and interact with a marketplace across Web, Mobile, and Backend API platforms.

📂 Project Structure
Micro MarketPlace/
│
├── backend/        # Node.js + Express + MongoDB API
├── web/            # React (Vite) Web Application
├── mobile/         # React Native Mobile Application
└── README.md

⚙️ Tech Stack
🔧 Backend

Node.js

Express.js

MongoDB

JWT Authentication

bcrypt for password hashing

🌐 Web

React.js

Vite

Axios

React Router DOM

📱 Mobile

React Native

Expo

Axios

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/anuragsingh8076/micro-marketplace.git
cd micro-marketplace

🖥 Backend Setup
cd backend
npm install
npm run seed
npm start


📍 Server runs on:

http://localhost:5000

🌐 Web App Setup
cd web
npm install
npm run dev


📍 Web app runs on:

http://localhost:5173

📱 Mobile App Setup
cd mobile
npm install
npm start


📱 Run using:

Expo Go app (Android / iOS)

Android Emulator

iOS Simulator (Mac only)

🔐 Features

User Registration & Login

JWT Authentication

Secure Password Hashing

Marketplace-ready Architecture

Separate Web & Mobile Frontends

Scalable Backend API

🧪 Environment Variables

Create a .env file inside backend/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

🛠 Common Issues
Web shows blank white screen

Check browser console for errors

Make sure backend is running

Ensure correct API URL in Axios config

Vite not recognized
npm install -D vite

📌 Future Improvements

Product listing & checkout

Admin dashboard

Image uploads

Payment gateway

Order management

🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

📄 License

This project is licensed under the MIT License.

👤 Author

Anurag Singh
🔗 GitHub: https://github.com/anuragsingh8076

✅ How to Add This to GitHub

Create README.md in project root

Paste this content

Run:

git add README.md
git commit -m "Add project README"
git push
