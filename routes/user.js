const userController = require("../controllers/userController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const multer = require("multer");
const path = require("path");


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = require("express").Router();
//GET ALL USERS
router.get("/", verifyToken, userController.getAllUsers);
router.post("/getPrice", verifyToken, userController.GetPrice);
router.get("/getTypePage", verifyToken, userController.GetTypePage);
router.post("/AddOrder", verifyToken, userController.AddOrder);
router.get("/history_order", verifyToken, userController.HistoryOrder);
router.post("/print", upload.single("file"), userController.Print);
router.get("/history_print", verifyToken, userController.HistoryPrint);

module.exports = router;
