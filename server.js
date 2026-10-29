const express = require("express");
const sequelize = require("./config/database");

require("./models");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});


app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


const PORT = 3000;


async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected successfully");

    await sequelize.sync();
    console.log("Database tables created successfully");

    app.listen(PORT, () => {
      console.log(`Server running at:${PORT}`);
    });
  } catch (error) {
    console.error( error.message);
   
  }
}

startServer();