const botao = document.querySelector("#salvar");

botao.addEventListener("click", () => {
	const curso = getDadosForm();
	postDadosParaApi(curso);
});

function getDadosForm() {
	const inputNome = document.querySelector("#nome");
	const inputCargaHoraria = document.querySelector("#carga_horaria");

	if (inputNome.value == null || inputCargaHoraria.value == null) {
		console.log("Campos de entrada vazios.");
		return;
	}
	return {
		nome: inputNome.value,
		carga_horaria: inputCargaHoraria.value,
	};
}

async function postDadosParaApi(curso) {
	const resposta = await fetch("http://localhost:3000/cursos", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(curso),
	});
	try {
		if (resposta.status == 201) {
			limparCampos();
			window.location.href = "index.html";
		} else {
			console.log("Erro ao adicionar curso");
		}
	} catch (error) {
		console.log(error);
	}
}
function limparCampos() {
	document.querySelector("#nome").value = "";
	document.querySelector("#carga_horaria").value = "";
}
