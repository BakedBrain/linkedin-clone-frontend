# 🚀 LinkedIn Clone - Full Stack Social Media Application

A fully functional social media web application inspired by LinkedIn, built with the MERN stack. Users can sign up, log in, create posts, interact with content through likes and comments, and manage their profiles.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Running the Project](#-running-the-project)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Features
- ✅ **User Authentication**
  - Secure signup with password hashing (bcrypt)
  - JWT-based login system
  - Protected routes and authorization
  - Session management

- ✅ **Post Management**
  - Create text-based posts
  - Optional image URL support
  - View all posts in chronological order (latest first)
  - Real-time feed updates

- ✅ **User Profile**
  - View personal profile information
  - Display user name and email
  - Profile avatar with user initials

### Bonus Features
- ✅ **Social Interactions**
  - Like/unlike posts
  - Comment on posts
  - View like counts and comment threads
  
- ✅ **Post Management**
  - Edit your own posts
  - Delete your own posts
  - Post ownership validation
  
- ✅ **Rich User Experience**
  - Responsive design (mobile, tablet, desktop)
  - Loading states and error handling
  - Smooth animations and transitions
  - Intuitive UI/UX

- ✅ **Additional Features**
  - Image support for posts
  - Comment threading
  - Post timestamps
  - User avatars
  - Navbar with navigation
  - Logout functionality

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React.js** | UI library for building interactive interfaces |
| **React Router DOM** | Client-side routing and navigation |
| **Axios** | HTTP client for API requests |
| **CSS3** | Styling and responsive design |
| **Context API** | Global state management for authentication |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database for data storage |
| **Mongoose** | ODM (Object Data Modeling) for MongoDB |
| **JWT** | JSON Web Tokens for authentication |
| **bcryptjs** | Password hashing and encryption |
| **CORS** | Cross-Origin Resource Sharing middleware |
| **dotenv** | Environment variable management |

### Deployment
| Platform | Purpose |
|----------|---------|
| **Vercel** | Frontend hosting and deployment |
| **Render** | Backend API hosting |
| **MongoDB Atlas** | Cloud database hosting |
| **GitHub** | Version control and code repository |

---

## 📁 Project Structure

```
linkedin-clone/
│
├── backend/                    # Backend API
│   ├── models/
│   │   ├── User.js            # User schema and model
│   │   └── Post.js            # Post schema with comments
│   ├── routes/
│   │   ├── auth.js            # Authentication routes
│   │   └── posts.js           # Post CRUD operations
│   ├── middleware/
│   │   └── auth.js            # JWT verification middleware
│   ├── .env                   # Environment variables
│   ├── .gitignore             # Git ignore rules
│   ├── server.js              # Express server entry point
│   └── package.json           # Backend dependencies
│
├── frontend/                   # React frontend
│   ├── public/
│   │   └── index.html         # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js      # Navigation component
│   │   │   ├── Login.js       # Login page
│   │   │   ├── Signup.js      # Signup page
│   │   │   ├── Feed.js        # Main feed page
│   │   │   ├── CreatePost.js  # Post creation form
│   │   │   ├── PostCard.js    # Individual post display
│   │   │   └── Profile.js     # User profile page
│   │   ├── context/
│   │   │   └── AuthContext.js # Authentication context
│   │   ├── App.js             # Main app component
│   │   ├── App.css            # Global styles
│   │   └── index.js           # React entry point
│   ├── .gitignore             # Git ignore rules
│   └── package.json           # Frontend dependencies
│
└── README.md                   # Project documentation
```

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **MongoDB Atlas Account** (free) - [Sign up](https://www.mongodb.com/cloud/atlas)

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/linkedin-clone.git
cd linkedin-clone
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to your `.env` file:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/linkedin-clone?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
NODE_ENV=development
```

**Replace:**
- `username:password` with your MongoDB Atlas credentials
- `cluster` with your cluster name
- `JWT_SECRET` with a random secret string

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd ../frontend

# Install dependencies
npm install
```

**Update API URL:**

Open `frontend/src/context/AuthContext.js` and verify:
```javascript
const API_URL = 'http://localhost:5000/api'; // For local development
```

Do the same in:
- `src/components/Feed.js`
- `src/components/CreatePost.js`
- `src/components/PostCard.js`

---

## 💻 Running the Project

### Option 1: Run Both Servers Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB Connected
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

Browser will automatically open at `http://localhost:3000`

### Option 2: Run from Root (if using concurrently)

```bash
# Install concurrently globally (one time only)
npm install -g concurrently

# Run both servers
concurrently "cd backend && npm run dev" "cd frontend && npm start"
```

---

## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.net/linkedin-clone` |
| `JWT_SECRET` | Secret key for JWT signing | `your_random_secret_key_123` |
| `PORT` | Backend server port | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### MongoDB Atlas Setup

1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free M0 tier)
3. Go to **Database Access** → Add database user
4. Go to **Network Access** → Add IP Address → Allow access from anywhere (0.0.0.0/0)
5. Click **Connect** → **Connect your application** → Copy connection string
6. Replace `<password>` with your actual password
7. Add `/linkedin-clone` before the `?` in the URI

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

**Signup Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Posts

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/posts` | Get all posts | No |
| POST | `/api/posts` | Create new post | Yes |
| PUT | `/api/posts/:id` | Update post | Yes (Owner only) |
| DELETE | `/api/posts/:id` | Delete post | Yes (Owner only) |
| POST | `/api/posts/:id/like` | Like/unlike post | Yes |
| POST | `/api/posts/:id/comment` | Add comment | Yes |

**Create Post Request:**
```json
{
  "content": "Hello World! This is my first post.",
  "image": "https://example.com/image.jpg"
}
```

**Add Comment Request:**
```json
{
  "text": "Great post!"
}
```

---

## 🌐 Deployment

### Deploy Backend to Render

1. Push code to GitHub
2. Sign up at [Render.com](https://render.com)
3. Create new **Web Service**
4. Connect GitHub repository
5. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** Add all from `.env`
6. Deploy!

### Deploy Frontend to Vercel

1. Sign up at [Vercel.com](https://vercel.com)
2. Import GitHub repository
3. Framework Preset: **Create React App**
4. Update `API_URL` in all files to your Render URL
5. Deploy!

**Update API URLs before deploying:**
```javascript
const API_URL = 'https://your-backend.onrender.com/api';
```

---

## 🧪 Testing the Application

### Test User Authentication
1. Navigate to signup page
2. Create account with name, email, and password
3. Should redirect to feed after successful signup
4. Logout and login with same credentials

### Test Post Features
1. Create a new post from the feed page
2. Like your own post (counter should increase)
3. Add a comment to the post
4. Edit the post content
5. Delete the post

### Test Responsiveness
- Open on mobile device or resize browser
- All features should work on different screen sizes
- Navigation should be accessible

---

## 🐛 Troubleshooting

### MongoDB Connection Error
**Error:** `MongoServerError: bad auth : authentication failed`

**Solution:**
- Verify MongoDB Atlas username and password
- Check Network Access allows 0.0.0.0/0
- Ensure connection string is correctly formatted

### CORS Error
**Error:** `CORS policy: No 'Access-Control-Allow-Origin' header`

**Solution:**
- Verify backend has `cors` package installed
- Check `app.use(cors())` in server.js
- Add frontend URL to CORS origin if restricted

### Port Already in Use
**Error:** `Port 5000 is already in use`

**Solution:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Future Enhancements

- [ ] Real-time notifications
- [ ] Follow/unfollow users
- [ ] Private messaging
- [ ] Profile picture upload
- [ ] Search functionality
- [ ] Hashtags and trending topics
- [ ] Email verification
- [ ] Password reset
- [ ] Dark mode
- [ ] Infinite scroll pagination

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [DARSHAN D](https://github.com/BakedBrain)
- LinkedIn: [DARSHAN D]([https://linkedin.com/in/your-profile](https://www.linkedin.com/in/darshan-d-1a0116381))
- Email: darshankdevaraja@gmail.com

---

## 🙏 Acknowledgments

- Inspired by LinkedIn's user interface and features
- Built as a learning project for full-stack development
- MongoDB Atlas for free database hosting
- Vercel and Render for free deployment

---

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Open an issue on GitHub
3. Contact via email

---

**⭐ If you found this project helpful, please give it a star!**

---

## 📚 Learning Resources

This project helped me learn:
- React.js component architecture
- RESTful API design
- JWT authentication
- MongoDB database design
- Full-stack deployment
- Git version control

Perfect for beginners learning the MERN stack!

---

Made with ❤️ by DARSHAN D
