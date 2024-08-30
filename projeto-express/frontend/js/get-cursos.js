const divCursos = document.querySelector("#cursos");

async function consultaCursos() {
	const retorno = await fetch("http://localhost:3000/cursos");
	const cursos = await retorno.json();
	preencheTela(cursos);
}

function preencheTela(cursos) {
	cursos.forEach((curso) => {
		const novoCursoHTML = `
        <div class="curso">
			<h2>${curso.nome}</h2>
			<p>Carga horária ${curso.carga_horaria} horas</p>
			<button class="apagar" type="button" id-curso="${curso.id}">Apagar</button>
		</div>
        `;
		divCursos.innerHTML += novoCursoHTML;
	});
}
consultaCursos();
