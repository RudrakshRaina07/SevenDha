# SevenDha 📈

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

I've always been curious about how trading platforms like Zerodha work under the hood. So I decided to build one myself.

SevenDha is a stock trading platform I built from scratch using the MERN stack. It's not just a UI clone — it has real authentication, a working backend, live stock prices from NSE, and is fully deployed on the cloud.

---

## 🌐 Live Demo

| | Link |
|--|------|
| 🖥️ Landing Page | [sevendha-frontend.vercel.app](https://sevendha-frontend.vercel.app) |
| 📊 Dashboard | [sevendha-dashboard.vercel.app](https://sevendha-dashboard.vercel.app) |
| ⚙️ Backend API | [sevendha-backend.onrender.com](https://sevendha-backend.onrender.com) |

> **Note:** Backend is hosted on Render's free tier so it might take 30-60 seconds to wake up on first request. That's just how free hosting works 😅

---

## What can you do with it?

- Sign up and log in securely (JWT + httpOnly cookies)
- See your holdings and how much you're up or down
- Place buy and sell orders
- Track your positions
- Watch live NSE prices update every 60 seconds (INFY pulls real data from Twelve Data API)
- Log out and get redirected back to the landing page

---

## 🛠️ What I built it with

**Frontend & Dashboard**
- React.js with Context API for state management
- Axios for API calls
- Bootstrap + custom CSS for styling and responsiveness
- Chart.js for the bar and doughnut charts
- React Router for navigation

**Backend**
- Node.js + Express.js following MVC architecture
- MongoDB with Mongoose for the database
- JWT for authentication — stored in httpOnly cookies so JS can't touch them
- bcryptjs for password hashing
- CORS configured for cross-domain cookie sharing between Vercel and Render

**External**
- Twelve Data API for live NSE stock prices
- MongoDB Atlas for cloud database
- Vercel for frontend hosting
- Render for backend hosting

---

## 🏗️ How the code is organized

I restructured the entire backend into proper MVC format:

```
SevenDha/
├── backend/
│   ├── Config/
│   │   └── db.js               # MongoDB connection
│   ├── Controllers/
│   │   ├── AuthController.js   # signup, login, logout, getUser
│   │   ├── HoldingsController.js # buy, sell, get holdings
│   │   ├── OrdersController.js # orders and positions
│   │   └── MarketController.js # live prices from Twelve Data
│   ├── Models/                 # Mongoose models
│   ├── Routes/                 # Express routes
│   ├── Middlewares/
│   │   └── AuthMiddlewares.js  # JWT verification
│   ├── Schema/                 # Mongoose schemas
│   ├── Utils/
│   │   └── SecretToken.js      # JWT token creation
│   ├── app.js                  # Express setup
│   └── server.js               # Server entry point
│
├── frontend/                   # Landing page
│   └── src/landing_page/
│       ├── home/
│       ├── about/
│       ├── login/
│       ├── signup/
│       ├── pricing/
│       ├── product/
│       └── support/
│
└── dashboard/                  # Trading dashboard
    └── src/
        ├── GeneralContext.js   # Global state + API calls
        ├── Holdings.js
        ├── Orders.js
        ├── Positions.js
        ├── WatchList.js
        └── Dashboard.js
```

---

## Running it locally

You'll need Node.js, a MongoDB Atlas account and a free Twelve Data API key before starting.

**Clone the repo**
```bash
git clone https://github.com/RudrakshRaina07/SevenDha.git
cd SevenDha
```

**Start the backend**
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
MONGO_URL=your_mongodb_url
TOKEN_KEY=any_random_secret_string
TWELVE_API_KEY=your_twelve_data_key
NODE_ENV=development
```

```bash
npm run dev
# runs on http://localhost:3002
```

**Start the frontend**
```bash
cd frontend
npm install
```

Create `.env.local` inside `frontend/`:
```env
REACT_APP_BACKEND_URL=http://localhost:3002
REACT_APP_DASHBOARD_URL=http://localhost:3001
```

```bash
npm start
# runs on http://localhost:3000
```

**Start the dashboard**
```bash
cd dashboard
npm install
```

Create `.env.local` inside `dashboard/`:
```env
REACT_APP_BACKEND_URL=http://localhost:3002
REACT_APP_FRONTEND_URL=http://localhost:3000
```

```bash
npm start
# runs on http://localhost:3001
```

---

## API Endpoints

### Auth
| Method | Endpoint | What it does | Needs Auth? |
|--------|----------|-------------|-------------|
| POST | `/signup` | Register new user | ❌ |
| POST | `/login` | Login and get cookie | ❌ |
| POST | `/logout` | Clear cookie | ❌ |
| GET | `/getUser` | Get logged in user info | ✅ |

### Holdings
| Method | Endpoint | What it does | Needs Auth? |
|--------|----------|-------------|-------------|
| GET | `/allHoldings` | Fetch all holdings | ✅ |
| POST | `/buy` | Buy a stock | ✅ |
| POST | `/sell` | Sell a stock | ✅ |

### Orders & Positions
| Method | Endpoint | What it does | Needs Auth? |
|--------|----------|-------------|-------------|
| GET | `/allOrders` | Fetch order history | ✅ |
| POST | `/newOrder` | Place new order | ✅ |
| GET | `/allPositions` | Fetch positions | ✅ |

### Market
| Method | Endpoint | What it does | Needs Auth? |
|--------|----------|-------------|-------------|
| POST | `/market/prices` | Get live NSE prices | ❌ |

---

## Things I learned building this

Honestly this project taught me more than any tutorial did. A few things that stood out:

- **Cross domain cookies are painful** — getting `sameSite: "none"` and `secure: true` to work between Vercel and Render took longer than I'd like to admit
- **Stale closures are sneaky** — `setInterval` was reading old holdings data because of how JavaScript closures work. Fixed it with `useRef` and `useCallback`
- **MVC makes life easier** — starting with everything in one `index.js` file was a mess. Restructuring into proper MVC made the codebase so much cleaner
- **Free tiers have limits** — Render sleeps after 15 minutes, Twelve Data gives delayed prices on free plan. Good enough for a project though!

---

## Deployment

| What | Where | Why |
|------|-------|-----|
| Backend | Render | Best free Node.js hosting |
| Frontend | Vercel | Built for React, incredibly fast |
| Dashboard | Vercel | Same reason |
| Database | MongoDB Atlas | Free cloud MongoDB |

---

## 👨‍💻 Built by

**Rudraksh Raina**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RudrakshRaina07)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-linkedin)

---

*Inspired by Zerodha. Built to learn.*