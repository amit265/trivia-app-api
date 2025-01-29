# Quiz API Backend

This is the backend server for a **Quiz Application** that allows users to register, login, take quizzes, submit answers, and view a leaderboard. Built using **Node.js** and **MongoDB**, the API supports user authentication, quiz management, and tracking user scores.

## Features

- **User Registration**: Register a new user with email, username, and password.
- **User Login**: Log in with email and password to receive a JWT token.
- **Quiz Management**: Fetch available quizzes and submit quiz answers.
- **Leaderboard**: View the top users based on quiz scores.
- **User Score Tracking**: Track the user’s score for each quiz attempt.

## Technologies

- **Node.js**: JavaScript runtime for building the server-side API.
- **Express**: Web framework for routing and handling requests.
- **MongoDB**: NoSQL database for storing user data, quizzes, and leaderboard scores.
- **JWT**: JSON Web Tokens for secure user authentication.
- **CORS**: Cross-Origin Resource Sharing to enable API access from different domains.

## Prerequisites

Before running the application, ensure you have the following:

- **Node.js** (LTS version recommended) installed on your machine.
- **MongoDB** running locally or using a cloud service like MongoDB Atlas.
- **Postman** or any API testing tool for testing the endpoints.

## Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/amit265/trivia-app-api.git
cd trivia-app-api
npm install

```
2. Install Dependencies

  npm install

3. Set Up Environment Variables
Create a .env file in the root directory of your project and add the following variables:

```bash
MONGODB_URI=mongodb://localhost:27017/quizApp
JWT_SECRET=your-secret-key
PORT=5000
```

MONGODB_URI: Your MongoDB connection string.
JWT_SECRET: A secret key used for signing JWT tokens.
PORT: The port the API will run on (default: 5000).

4. Run the Application

To start the server:

npm run dev

The server will now be running on http://localhost:5000.

API Endpoints
1. User Registration
POST /api/auth/register

Register a new user with email, username, and password.

Request Body:
```
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```
Response:
```
{
  "message": "User registered successfully!"
}
```
2. User Login
POST /api/auth/login

Login with email and password to get a JWT token.

Request Body:

```
{
  "email": "john@example.com",
  "password": "password123"
}

```

Response:

```
{
  "token": "your_jwt_token_here"
}
```
3. Get All Quizzes
GET /api/quiz

Fetch the list of all quizzes. Requires JWT authentication.

Headers:
Authorization: Bearer <token>
Response:

```
[
  {
    "question": "What is the chemical symbol for water?",
    "options": ["O2", "H2O", "CO2", "NaCl"],
    "correct_answer": "H2O",
    "level": "Easy",
    "category": "Science",
    "description": "Water is composed of two hydrogen atoms and one oxygen atom, hence the chemical formula H2O."
  }
]

```
4. Submit Quiz Answers
POST /api/quiz/submit

Submit quiz answers. Requires JWT authentication.

Request Body:

```
{
  "answers": [
    {
      "questionId": "quiz_id_here",
      "userAnswer": "H2O"
    }
  ]
}

```
Response:

```
{
  "score": 1,
  "results": [
    {
      "quizId": "quiz_id_here",
      "isCorrect": true
    }
  ]
}

```
5. Get Leaderboard
GET /api/leaderboard

Fetch the top users and their scores.

Response:

```
[
  {
    "_id": "user_id_1",
    "username": "john_doe",
    "score": 10
  },
  {
    "_id": "user_id_2",
    "username": "jane_doe",
    "score": 8
  }
]

```
Testing with Postman
You can test all the endpoints using Postman or any API testing tool. Here are the steps:

Register a User: Use the POST /api/auth/register endpoint to create a user.
Login: Use the POST /api/auth/login endpoint to log in and get the JWT token.
Fetch Quizzes: Use the GET /api/quiz endpoint with the Authorization header set to Bearer <your_jwt_token>.
Submit Answers: Use the POST /api/quiz/submit endpoint to submit quiz answers.
Leaderboard: Use the GET /api/leaderboard endpoint to fetch the leaderboard.
Contributing
If you’d like to contribute to this project, feel free to fork the repository and create a pull request. Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make changes and commit them (git commit -am 'Add new feature').
Push to your branch (git push origin feature/your-feature).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

```

---

This code should work as the content for your `README.md`.

```












 
