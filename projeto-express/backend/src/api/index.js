import express from "express";
import cursosRouter from "./cursos.js";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("App online!");
});

router.use("/cursos", cursosRouter);

export default router;
