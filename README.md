# MERN Starter Kit with TypeScript

A modern, full-stack web application starter kit built with **M**ongoDB, **E**xpress.js, **R**eact, and **N**ode.js, all written in TypeScript. This project provides a solid foundation for building scalable web applications with a clean, modular architecture.

## 🚀 Features

- **Full TypeScript Support** - Type-safe development across the entire stack
- **Modern React** - Built with React 19+ and Vite for fast development
- **Express.js Backend** - RESTful API with clean architecture
- **MongoDB Integration** - MongoDB with Mongoose ODM
- **API Documentation** - Integrated Swagger UI for API documentation
- **Development Tools** - Hot reload, linting, and build tools configured
- **Modular Structure** - Organized codebase with separation of concerns

## 📁 Project Structure

```
mern-starter-kit-ts/
├── backend/                # Node.js + Express.js API
│   ├── src/
│   │   ├── controller/     # Route controllers
│   │   ├── model/          # MongoDB models (Mongoose)
│   │   ├── routes/         # API routes
│   │   ├── service/        # Business logic layer
│   │   ├── util/           # Utility functions
│   │   ├── server.ts       # Server entry point
│   │   └── swagger.ts      # Swagger configuration
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React + TypeScript UI
│   ├── src/
│   │   ├── assets/         # Static assets
│   │   ├── App.tsx         # Main App component
│   │   └── main.tsx        # Entry point
│   ├── package.json
│   ├── vite.config.ts      # Vite configuration
│   └── tsconfig.json
└── README.md
```

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Swagger** - API documentation
- **Nodemon** - Development server with hot reload

### Frontend
- **React 19+** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sreeakhila07/mern-starter-kit-ts.git
cd mern-starter-kit-ts
```

### 2. Setup Backend

```bash
cd backend
npm install
```

#### Environment Configuration

Create a `.env` file in the backend directory:

```env
PORT=3000
DB_CONN_STRING=your_mongodb_connection_string
DB_NAME=your_database_name
```

**Note:** Update the MongoDB connection string with your credentials.

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

### 4. Start Development Servers

#### Backend (Terminal 1)
```bash
cd backend
npm run dev
```

#### Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```

The application will be available at:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000
- **API Documentation:** http://localhost:3000/swagger

## 📡 API Endpoints

### Users API
- `GET /users` - Get all users
- `POST /users` - Create a new user

### API Documentation
Visit `http://localhost:3000/swagger` to explore the interactive API documentation.

## 🏗 Available Scripts

### Backend Scripts
```bash
npm run dev      # Start development server with hot reload
npm run build    # Build and start production server
npm test         # Run tests (to be implemented)
```

### Frontend Scripts
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🗄 Database Structure

The starter kit includes a basic User model:

```typescript
{
  name: string,
  email: string,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Configuration

### TypeScript Configuration
- Backend: Configured for Node.js environment
- Frontend: Configured for React and DOM APIs

### Development Tools
- **Nodemon** - Backend hot reload
- **Vite** - Frontend hot reload and fast builds
- **ESLint** - Code quality and consistency

## 🚀 Deployment

### Backend Deployment
1. Build the TypeScript code: `npm run build`
2. Deploy to your preferred platform (Heroku, Vercel, AWS, etc.)
3. Set environment variables in your deployment platform

### Frontend Deployment
1. Build for production: `npm run build`
2. Deploy the `dist` folder to your preferred platform

## 🤝 Contributing

This repository is provided as a starter kit for MERN stack projects with TypeScript. It's designed to be forked and modified for your own projects rather than receiving direct contributions.

Currently, we are not actively seeking contributions as this is intended to be a clean, minimal template. Feel free to fork the repository and adapt it to your specific needs.

<!-- 1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community
- MongoDB team for the excellent database
- All open-source contributors

## 📞 Support

If you have any questions or need help, please open an issue on GitHub. -->

---

**Happy Coding! 🎉**