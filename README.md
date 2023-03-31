# Social_Media_Project_ITI
Node.js project implements a Social Media Backend Server. It includes CRUD operations for users, posts, comments, and reviews, and image uploading for user profile pictures. Additionally, it also includes features such as Role based authentication, request validation, error handling and data aggregation using mongoDB aggregation pipelines.

## Technologies used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cloudinary
- Multer
- Joi
- bcrypt
- dotenv

## Features

- User model and CRUD operations with role-based authentication.
- Follow and Unfollow users
- Post model and CRUD operations.
- Like and dislike posts
- Comments model and CRUD operations.
- Review model with CRUD operations.
- Profile pictures for users with image uploading through Multer and Cloudinary
- API protection for allowed roles
- Retrieval of comments and reviews with each post
- Retrieval of posts with each user
- Protection of sensitive information like passwords
- Request validation using Joi

## Prerequisites

- Node.js installed on your system.
- Access to a MongoDB Atlas account.

## Installation

1. Clone the repository to your local machine.
2. Run npm install to install the required dependencies.
3. Create a .env file in the project's root directory and set your environment variables (database URL, JWT secret, and Cloudinary credentials).
4. Run npm start to start the server.

## API Endpoints

User Authentication

- `POST api/auth/register` - Register a new user.
- `POST api/auth/login` - Login a user.
- `GET api/users/:id` - Get a specific user by ID.
- `PUT api/users/:id` - Update a specific user by ID.
- `PUT api/users/:id/follow` - Follow a specific user by ID.
- `PUT api/users/:id/unfollow` - Unfollow a specific user by ID.
- `DELETE api/users/:id` - Delete a specific user by ID.

Posts

- `POST api/posts` - Create a new post.
- `GET api/posts/timeline/all` - Get a list of all posts.
- `GET api/posts/:id` - Get a specific post by ID.
- `PUT api/posts/:id` - Update a specific post by ID.
- `PUT api/posts/:id/like` - Like a specific post by ID.
- `DELETE api/posts/:id` - Delete a specific post by ID.

Comments

- `POST /api/posts/:post_id/comments` - Create a new comment for specific post.
- `GET /api/posts/:post_id/comments` - Get a list of all comments for specific post.
- `GET /api/posts/:post_id/comments/:comment_id` - Get a specific comment by ID for specific post.
- `PUT /api/posts/:post_id/comments/:comment_id` - Update a specific comment by ID for specific post.
- `DELETE /api/posts/:post_id/comments/:comment_id` - Delete a specific comment by ID for specific post.

Reviews

- `POST /api/posts/:post_id/review` - Create a new review for specific post.
- `GET /api/posts/:post_id/review` - Get a list of all reviews for specific post.
- `GET /api/posts/:post_id/review/:review_id` - Get a specific review by ID for specific post.
- `PUT /api/posts/:post_id/review/:review_id` - Update a specific review by ID for specific post.
- `DELETE /api/posts/:post_id/review/:review_id` - Delete a specific review by ID for specific post.

## Author
<a href="https://github.com/NadaMarei">- Nada Marei</a> 


