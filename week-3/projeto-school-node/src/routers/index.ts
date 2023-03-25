import { Router } from "express";
import healthRouter from "./heatlh.router";
import studentsRouter from "./students.router";

const router = Router();

router.use("/health", healthRouter);
router.use("/students", studentsRouter);

export default router;
