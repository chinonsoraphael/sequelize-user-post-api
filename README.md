Sequelize User and Post Management API

This is a REST API built with Node.js, Express.js, Sequelize, and MySQL. It manages users and their posts using CRUD operations and demonstrates a one-to-many relationship between users and posts.
I used 
 Node.js
 Express.js
 Sequelize ORM
 MySQL
 Postman

It featured
 Create, view, update, and delete users. Create, view, update, and delete posts.
  Associate each post with a user.
 Retrieve users together with their posts.
 Retrieve posts together with their authors.
 Test API endpoints using Postman.


Installation and Setup

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER

Replace the example URL and folder name with your actual repository details.

2. Install dependencies

npm install

3. Create the MySQL database

Open MySQL and run:

CREATE DATABASE sequelize_assignment;

4. Configure the database connection

Open config/database.js and enter your local MySQL username and password. Do not upload your real database password to a public repository.

5. Start the server

node server.js

If the connection succeeds, the server will report that MySQL is connected and the tables have been created.

The API runs at:

http://localhost:3000

API Endpoints

Users

Method	Endpoint	Description
POST	/api/users	Create a user
GET	/api/users	Get all users
GET	/api/users/:id	Get one user
PUT	/api/users/:id	Update a user
DELETE	/api/users/:id	Delete a user
GET	/api/users/with-posts	Get users with their posts

Posts

Method	Endpoint	Description
POST	/api/posts	Create a post
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get one post
PUT	/api/posts/:id	Update a post
DELETE	/api/posts/:id	Delete a post
GET	/api/posts/with-users	Get posts with their authors

Testing with Postman

For POST and PUT requests, select Body → raw → JSON.

Example user request:

POST http://localhost:3000/api/users

{
  "name": "Chinonso Raphael",
  "email": "chiboy@gmail.com"
}

Example post request:

POST http://localhost:3000/api/posts

{
  "title": "My First Post",
  "content": "Learning Sequelize",
  "userId": 3
}

Use an existing user ID for userId.

Project Structure

config/
  database.js
models/
  User.js
  Post.js
  index.js
controllers/
  userController.js
  postController.js
routes/
  userRoutes.js
  postRoutes.js
server.js
package.json
package-lock.json
README.md

Author

Chinonso Raphael