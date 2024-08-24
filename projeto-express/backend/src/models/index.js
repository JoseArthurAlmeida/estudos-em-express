import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import Curso from "./curso.js";

const curso = Curso(sequelize, DataTypes);

const db = { sequelize, curso };

export default db;
