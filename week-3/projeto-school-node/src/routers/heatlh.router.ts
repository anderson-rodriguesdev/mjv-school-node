import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const healthCheck = { message: "Application is runinng" };
  res.send(healthCheck);
});

router.get("/check", (req: Request, res: Response) => {
  const healthCheck = { message: "Application is working" };
  res.send(healthCheck);
});

export default router;
