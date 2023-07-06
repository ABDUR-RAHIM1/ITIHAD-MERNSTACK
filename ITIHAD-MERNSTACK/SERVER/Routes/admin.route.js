const { getAdmin, loginAdmin, deleteAdmin, createModaretor, updateAdmin } = require('../Controllers/admin.controller');

const router = require('express').Router()

router.get("/admins", getAdmin)
router.post("/modaretor-create", createModaretor)
router.post("/admin-login", loginAdmin)
router.put("/admin-update/:id", updateAdmin)
router.delete("/admin-delete/:id", deleteAdmin)

module.exports = router;