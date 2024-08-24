const Curso = (sequelize, DataTypes) => {
	const Curso = sequelize.define(
		"Curso",
		{
			nome: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			carga_horaria: {
				type: DataTypes.INTEGER,
			},
		},
		{
			tableName: "curso",
		}
	);
	return Curso;
};

export default Curso;
