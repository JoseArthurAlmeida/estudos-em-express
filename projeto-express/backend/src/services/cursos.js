class CursoService {
	constructor(CursoModel) {
		this.curso = CursoModel;
	}

	async get() {
		const cursos = await this.curso.findAll();
		return cursos;
	}

	async adicionar(cursoDTO) {
		const curso = await this.curso.findOne({
			where: {
				nome: cursoDTO.nome,
			},
		});

		if (curso != null) {
			throw new Error("Já existe um curso cadastrado com esse nome!");
		}
		try {
			await this.curso.create(cursoDTO);
		} catch (error) {
			console.error(error.message);
			throw error;
		}
	}

	async deletar(cursoID) {
		try {
			await this.curso.destroy({
				where: {
					id: cursoID,
				},
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

export default CursoService;
