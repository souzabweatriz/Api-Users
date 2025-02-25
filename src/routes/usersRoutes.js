const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");

router.get("/users", usersControllers.getAllUsers);
router.post("/users", usersControllers.addUser);
router.get("/users/:id", usersControllers.getUserById);
router.put("/users/:id", usersControllers.updateUser);
router.delete("/users/:id", usersControllers.deleteUser);

module.exports = router;