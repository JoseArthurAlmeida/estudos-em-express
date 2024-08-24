import express from "express";
import cors from "cors";

import routers from "./api/index.js";
import db from "./models/index.js";

const { sequelize } = db;

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/", routers);

sequelize.sync().then(() => {
	console.log("Conectado com sucesso ao banco de dados.");
});

app.listen(port, () => {
	console.log("App online!");
});
