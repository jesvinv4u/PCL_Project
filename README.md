# PCL_Project

```markdown
# MedCo

This project is a web application for managing medical campaigns built with React, Vite, and Firebase. It integrates Stripe for processing payments and an Express.js backend for server-side operations with MongoDB.

## Features

- **React & Vite** for a fast development environment with hot module replacement.
- **Firebase** for authentication and data management.
- **Stripe Integration** to handle secure payments.
- **Express & MongoDB** for API routing and database management.
- **React Router** for client-side routing.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or later
- npm
- A Firebase project with web app credentials
- A Stripe account to obtain your publishable key
- A MongoDB cluster (or local instance) for the backend

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/PCL_Project.git
   cd PCL_Project
   ```

2. **Install Client Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the project root with your Firebase and Stripe credentials. Example:
   ```dotenv
   VITE_apiKey=YOUR_FIREBASE_API_KEY
   VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
   VITE_projectId=YOUR_FIREBASE_PROJECT_ID
   VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
   VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
   VITE_appId=YOUR_FIREBASE_APP_ID

   VITE_Payment_Gateway_PK=YOUR_STRIPE_PUBLISHABLE_KEY
   ```
   **Note:** Replace the placeholders with your actual keys from your Firebase and Stripe dashboards.

4. (Optional) **Backend Environment Setup:**
   If you are running the Express.js backend separately, create a `.env` file in your backend directory containing:
   ```dotenv
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ACCESS_TOKEN_SECRET=your_jwt_secret
   PORT=5000
   ```
   Also, consider moving your MongoDB connection URI into this file for added security.

### Running the Application

#### Client
Start the development server with Vite:
```bash
npm run dev
```
Your application should open in your default browser. If not, navigate to [http://localhost:3000](http://localhost:3000) or the port shown in your console.

#### Backend
Start the Express.js server (if running separately) with:
```bash
node server.js
```
or, if you have a start script:
```bash
npm run start
```

## Git & Repository Notes

If you encounter the following error when pulling changes:
```
fatal: refusing to merge unrelated histories
```
Resolve it by running:
```bash
git pull origin main --allow-unrelated-histories
```

## Contributing

Contributions are welcome! Please open issues and submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Firebase](https://firebase.google.com/docs)
- [Stripe](https://stripe.com/docs)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
```
