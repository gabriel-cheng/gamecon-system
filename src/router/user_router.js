import { Router } from "express";
import UserCtrl from "../controllers/User_ctrl.js";
const user_ctrl = new UserCtrl();
const router = Router();


router.get("/", user_ctrl.viewAll);
router.post("/create", user_ctrl.createNewUser);

export default router;
