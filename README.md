# SevenDha 📈

A full-stack stock trading dashboard inspired by Zerodha, built using the MERN stack.
This application allows users to manage their portfolio, execute buy/sell orders, and view live stock prices through an interactive dashboard.

---

## 🚀 Features

* 🔐 User Authentication (JWT-based login/signup)
* 🖥️ Interactive Trading Dashboard (real-time portfolio view)
* 📊 Portfolio Management (Holdings & Positions)
* 💰 Buy & Sell Orders
* 📈 Live Stock Price Integration
* 🔄 Auto-updating stock data
* 📉 Profit & Loss tracking

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* Context API
* Axios

**Backend**

* Node.js
* Express.js
* MongoDB
* JWT Authentication

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/SevenDha.git
cd SevenDha
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_url
TOKEN_KEY=your_secret_key
FINNHUB_API_KEY=your_api_key
```

Run backend:

```bash
nodemon index.js
```

---

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

---

## 📊 Project Structure

```
SevenDha/
│
├── backend/
│   ├── Routes/
│   ├── Controllers/
│   ├── Models/
│
|── dashboard/
│    ├── components/
│
├── frontend/
│   ├── landing_page/
│
└── README.md
```

---

## ⭐ Acknowledgements

Inspired by Zerodha's trading platform UI/UX.
