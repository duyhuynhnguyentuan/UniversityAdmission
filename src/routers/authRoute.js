const express = require("express");
const router = express.Router();
// const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const {
    createUser,
    loginUserCtrl,
    loginAdmin,
    loginStaff,
    handleRefreshToken,
    logout

} = require("../controllers/UserCtrl");

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/staff-login", loginStaff);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);

// router.put("/edit-user", authMiddleware, updatedUser);
// router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
// router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
// router.put("/save-address", authMiddleware, saveAddress);

module.exports = router;
