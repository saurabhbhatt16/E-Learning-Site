# 🎓 E-Learning Platform (MERN Stack)

A modern, full-stack **E-Learning Management System** built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). This platform empowers students to explore, enroll in, and stream interactive video courses, while providing educators with a comprehensive dashboard to create, manage, and publish educational content.

---

## 🚀 Features

### 🎓 Student Experience
- **Course Discovery**: Browse, filter, and search through a rich catalog of published courses.
- **Interactive Course View**: Access video lectures, lecture notes, and course details seamlessly.
- **Enrolled Courses & Progress Tracking**: Keep track of purchased and active courses.
- **User Profile Management**: Edit avatar, update personal details, and handle account settings.
- **Password Reset**: Secure forgot password workflow with email/OTP verification.

### 👨‍🏫 Educator & Creator Dashboard
- **Creator Dashboard**: Unified overview of created courses, total students enrolled, and analytics.
- **Course Builder**: Draft, edit, and publish course metadata, pricing, titles, and descriptions.
- **Lecture Manager**: Upload, organize, and edit video lectures for each course module.
- **Media Uploads**: Cloudinary integration for high-performance video streaming and image hosting.

### 🔐 Security & Infrastructure
- **JWT Cookie Authentication**: Secure HTTP-only cookie session handling.
- **Password Hashing**: Industry-standard `bcryptjs` encryption.
- **Email Notifications**: Automated email delivery via `Nodemailer` for auth and password resets.
- **State Management**: Redux Toolkit on Frontend for predictable app state across sessions.

---

## 🛠️ Tech Stack

| Domain | Technology / Library | Description |
| :--- | :--- | :--- |
| **Frontend** | React 19 + Vite | High-performance single page application framework |
| **Styling** | Tailwind CSS v4 | Utility-first CSS styling engine |
| **State Management** | Redux Toolkit (`@reduxjs/toolkit`) | Centralized state store for courses, user, and lectures |
| **Icons & UI** | React Icons, React Spinners, React Toastify | Interactive UI feedback & notification system |
| **HTTP Client** | Axios | Promise-based HTTP requests with CORS credentials support |
| **Backend** | Node.js + Express.js v5 | RESTful API server architecture |
| **Database** | MongoDB + Mongoose | NoSQL document database schema design |
| **Authentication** | JSON Web Tokens (`jsonwebtoken`) + `cookie-parser` | Token authentication via HTTP-only cookies |
| **Storage & Uploads** | Cloudinary + Multer | Cloud media storage and local disk streaming |
| **Mail Services** | Nodemailer | Transactional email & OTP delivery |

---

## 📁 Repository Structure

```text
E-Learning-Site/
├── .gitignore               # Unified single Git Ignore configuration
├── .gitattributes           # Git repository attributes setup
├── README.md                # Main project documentation
│
├── Backend/                 # Express.js REST API Backend
│   ├── config/              # Database, Cloudinary, and Mailer configurations
│   ├── controller/          # Request handlers for Auth, User, and Course APIs
│   ├── middleware/          # Authentication & Multer upload middlewares
│   ├── model/               # Mongoose Schemas (User, Course, Lecture)
│   ├── public/              # Temporary runtime file upload storage (.gitkeep)
│   ├── route/               # API Router endpoints (/api/auth, /api/user, /api/course)
│   ├── .env.example         # Environment template for Backend configuration
│   ├── index.js             # Express application entry point
│   └── package.json         # Node.js backend dependencies & scripts
│
└── Frontend/                # React 19 + Vite Frontend App
    ├── public/              # Static assets & public icons
    ├── src/
    │   ├── assets/          # Application graphics, images, and audio files
    │   ├── component/       # Reusable UI components (Navbar, Cards, Search)
    │   ├── customHooks/     # Custom hooks for API fetching & user state
    │   ├── pages/           # Student pages (Home, Login, Profile, Course View)
    │   │   └── Educator/    # Educator dashboard & course creator pages
    │   ├── redux/           # Redux slices (userSlice, courseSlice, lectureSlice)
    │   ├── App.jsx          # Main application routing configuration
    │   ├── index.css        # Global CSS setup
    │   └── main.jsx         # React application DOM entry point
    ├── vite.config.js       # Vite configuration file
    ├── eslint.config.js     # ESLint code style rules
    └── package.json         # Frontend dependencies & scripts
```

---

## ⚙️ Environment Variables

The backend relies on environment configurations. A template is provided in `Backend/.env.example`.

Create a `.env` file inside the `Backend/` directory:

```env
PORT=8000

# Database Configuration
MONGODB_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>"

# JWT Authentication
JWT_SECRET="your_custom_jwt_secret_key"

# Email Services (Nodemailer)
USER_EMAIL="your_email@gmail.com"
USER_PASSWORD="your_app_specific_password"

# Cloudinary Storage
CLOUDINARY_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

> **Note**: `.env` files are automatically ignored by Git to prevent leaking sensitive API credentials.

---

## 🚦 Getting Started

### Prerequisites
- **Node.js**: v18.x or higher installed
- **MongoDB**: Active MongoDB Atlas cluster or local MongoDB instance
- **Cloudinary Account**: Cloudinary cloud name & API credentials for media hosting

### 1. Clone the Repository
```bash
git clone https://github.com/saurabhbhatt16/E-Learning-Site.git
cd E-Learning-Site
```

### 2. Backend Setup
```bash
# Navigate to Backend directory
cd Backend

# Install dependencies
npm install

# Create environment file from template
cp .env.example .env

# Configure your keys inside Backend/.env, then run dev server
npm run dev
```
*Backend server runs by default on `http://localhost:8000`.*

### 3. Frontend Setup
Open a new terminal window:
```bash
# Navigate to Frontend directory
cd Frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
*Frontend runs by default on `http://localhost:5173`.*

---

## 📡 API Endpoints Overview

### 🔐 Authentication (`/api/auth`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | Public |
| `POST` | `/api/auth/login` | Login user & issue HTTP-only cookie | Public |
| `POST` | `/api/auth/logout` | Clear auth token & logout user | Authenticated |
| `POST` | `/api/auth/send-otp` | Send password reset OTP email | Public |
| `POST` | `/api/auth/verify-otp` | Verify OTP for password reset | Public |
| `POST` | `/api/auth/reset-password` | Set new account password | Public |

### 👤 User Operations (`/api/user`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/user/profile` | Fetch authenticated user profile | Authenticated |
| `PUT` | `/api/user/update-profile` | Update profile details & avatar | Authenticated |

### 📚 Course Operations (`/api/course`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/course/published` | Fetch all published courses | Public |
| `POST` | `/api/course/create` | Create a new course draft | Educator |
| `GET` | `/api/course/creator` | Fetch courses created by logged-in user | Educator |
| `PUT` | `/api/course/edit/:id` | Edit course metadata & thumbnail | Educator |
| `POST` | `/api/course/create-lecture` | Upload video lecture to a course | Educator |
| `PUT` | `/api/course/edit-lecture/:id` | Update lecture details or video | Educator |

---

## 🛡️ Git & Security Policy

To maintain project hygiene and data privacy:
- A single, centralized **[.gitignore](file:///d:/desk/MERN/E-Learning%20Site/.gitignore)** is maintained at the repository root.
- Dependencies (`node_modules`), secrets (`.env`), temporary user uploads (`public/*`), build distributions (`dist/`), and editor settings (`.vscode`, `.idea`) are hidden from Git tracking.
- Template files like `Backend/.env.example` should be maintained whenever new configuration variables are introduced.

---

## 📝 License

This project is open-source and available under the [ISC License](LICENSE).
