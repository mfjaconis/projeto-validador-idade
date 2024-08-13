function verificar() {
	const data = new Date();
	const ano = data.getFullYear();
	let fano = document.getElementById("txtano");
	const res = document.getElementById("res");
	if (fano.value.length === 0 || Number(fano.value) > ano) {
		alert("[ERRO] Verifique os dados informados e tente novamente!");
	} else {
		const fsex = document.getElementsByName("radsex");
		const idade = ano - Number(fano.value);
		let genero = "";
		const img = document.createElement("img");
		img.setAttribute("id", "foto");
		if (fsex[0].checked) {
			genero = "Homem";
			if (idade >= 0 && idade < 10) {
				img.setAttribute("src", "crianca-mas.jpg");
			} else if (idade < 18) {
				img.setAttribute("src", "adolescente-mas.jpg");
			} else if (idade < 50) {
				img.setAttribute("src", "adulto-mas.jpg");
			} else {
				img.setAttribute("src", "idoso-mas.jpg");
			}
		} else if (fsex[1].checked) {
			genero = "Mulher";
			if (idade >= 0 && idade < 10) {
				img.setAttribute("src", "crianca-fem.jpg");
			} else if (idade < 18) {
				img.setAttribute("src", "adolescente-fem.jpg");
			} else if (idade < 50) {
				img.setAttribute("src", "adulta-fem.jpg");
			} else {
				img.setAttribute("src", "idosa-fem.jpg");
			}
		}
		fano.value = "";

		res.style.textAlign = "center";
		res.innerHTML = `Você é ${genero} com ${idade} anos. <br>`;
		res.appendChild(img);
	}
}
