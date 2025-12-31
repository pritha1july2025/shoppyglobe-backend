ShoppyGlobe Backend API

This project is the backend for the ShoppyGlobe E-commerce application built using Node.js, Express.js, and MongoDB.

It provides APIs for user authentication, product management, and shopping cart operations.

//============================================================
Technologies Used

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Thunder Client
//============================================================
API Endpoints
Authentication

POST /register – Register a new user

POST /login – Login and get JWT token

Products

GET /products – Get all products

GET /products/:id – Get product by ID

Cart (Protected)

POST /cart – Add product to cart

PUT /cart/:id – Update cart item

DELETE /cart/:id – Remove cart item

//==========================================================
Authorization

For protected routes, add this header:
Authorization: Bearer <JWT_TOKEN>
//========================================================
MongoDB Collections

Users

Products

Cart

CRUD operations are implemented for Products and Cart using MongoDB.

//=======================================================
API Testing

All APIs were tested using Thunder Client.
MongoDB data was verified using MongoDB Compass.

//=====================================================
How to Run:
npm install
npm start

//=====================================================
Server runs on:
http://localhost:8000

//====================================================

MongoDB Compass (Products & Cart)

Thunder Client API testing
//=====================================================
Author

SELVAPRITHA