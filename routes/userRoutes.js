const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUsersWithPosts,
} = require("../controllers/userController");

router.post("/", createUser);
router.get("/", getUsers);
router.get("/with-posts", getUsersWithPosts);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;