const listaDeCursos = document.querySelector("#cursos");
// console.log(listaDeCursos);
listaDeCursos.addEventListener("click", (event) => {
	if (event.target.classList.contains("apagar")) {
		const idCurso = event.target.attributes["id-curso"].value;
		if (window.confirm("Tem certeza que deseja apagar?")) {
			deleteCursoParaApi(idCurso);
		}
	}
});

async function deleteCursoParaApi(idCurso) {
	const resposta = await fetch(`http://localhost:3000/cursos/${idCurso}`, {
		method: "DELETE",
	});

	try {
		if (resposta.status == 201) {
			window.location.reload();
		} else {
			console.log("Erro ao apagar o curso");
		}
	} catch (error) {
		console.log(error);
	}
}
