import { Router } from "express";
const router = Router();

import {
  findAll,
  findOne,
  insert,
  update,
  remove
} from "../controllers/user.controller";

router.get("/list", findAll);
router.get("/detail/:id", findOne);
router.post("/insert", insert);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

export default router;
