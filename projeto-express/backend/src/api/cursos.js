import express from "express";
import db from "../models/index.js";
import CursoService from "../services/cursos.js";
import { body, check, validationResult } from "express-validator";

const { curso } = db;

const cursoService = new CursoService(curso);

const router = express.Router();

router.get("/", async (req, res) => {
	const cursos = await cursoService.get();
	res.status(200).json(cursos);
});

router.post(
	"/",

	// Início da validação dos dados
	body("nome").not().isEmpty().trim().escape(),
	check("carga_horaria")
		.not()
		.isEmpty()
		.matches(/\d/)
		.withMessage("Deve ser um número válido!"),
	// Final da validação dos dados

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { nome, carga_horaria } = req.body;
		try {
			await cursoService.adicionar({ nome, carga_horaria });
			res.status(201).send("Curso adicionado com sucesso!");
		} catch (error) {
			res.status(400).send(error.message);
		}
	}
);

router.delete("/:id", async (req, res) => {
	try {
		await cursoService.deletar(req.params.id);
		res.status(201).send(`Curso ${req.params.id} foi removido!`);
	} catch (error) {
		res.status(400).send(error.message);
	}
});

export default router;
