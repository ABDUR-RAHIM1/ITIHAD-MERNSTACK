const { getuser, deleteUser, createUser, loginUser, updateUser } = require("../Controllers/user.controller")

const router = require("express").Router()

router.get("/users",getuser)
router.post("/create-user", createUser)
router.post("/login-user", loginUser)
router.put("/update-user/:id", updateUser)
router.delete("/delete-user/:id", deleteUser)

module.exports = router