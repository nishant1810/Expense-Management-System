# SpendWise

The SpendWise System is a web-based application designed to assist users in tracking and managing their daily expenses. Built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), the system offers a scalable, responsive, and user-friendly platform for efficient personal and organizational financial management.

## Objectives

1. Simplify expense tracking for individuals and organizations.  
2. Provide detailed insights into spending patterns to enable better financial management.  
3. Offer a platform for users to create, update, and delete expenses and categories.  
4. Generate comprehensive reports based on user-defined time periods and categories.

## Features

### User Authentication and Authorization
- Secure sign-up and login for personal accounts using JSON Web Tokens (JWT).  
- Role-based access control for administrative tasks.  

### Expense and Category Management
- Create, update, and delete expense entries and categories.  
- Track expenses by date, category, and description.  
- Attach receipts or relevant documents to expense entries.

### Dashboard and Reporting
- Visual dashboard with an overview of total expenses, expenses by category, and recent transactions.  
- Generate reports with pie charts and bar graphs for selected date ranges and categories.

### Responsive User Interface
- Clean, responsive UI optimized for desktop, tablet, and mobile devices.  
- Built with React.js to create reusable components and manage state effectively.  

## Technical Architecture

### Frontend
- **React.js**: For building the user interface.  
- **tsparticles**: For visually appealing background effects.  
- **CSS Frameworks**: Bootstrap, Material Icons for responsive design.  

### Backend
- **Node.js**: Backend runtime environment.  
- **Express.js**: RESTful API for handling client requests.  
- **JWT**: Secure user authentication and middleware-protected endpoints.  

### Database
- **MongoDB**: NoSQL database for storing user information, expense entries, and categories.  
- **Mongoose**: ORM for schema definitions and validations.   

## Run Locally

Clone the project
      
    git clone https://github.com/nishant1810/SpendWise.git

Go to the project directory

    cd SpendWise

Go to the frontend directory and Install dependencies

    cd frontend
    npm install
    npm run dev

Go to the backend directory and Install dependencies

    cd backend
    npm install
    npm start

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in backend folder
create config folder and add config.env file in it and all all env variables there.
MONGO_URL : Your MongoDB Connection String
PORT: PORT number



