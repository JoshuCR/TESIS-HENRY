function calificar() {
    const respuestasCorrectas = ["H2O", "CO2", "CH4", "NH3", "C6H12O6", "O2", "N2", "HCl"];
    const respuestasUsuario = [];

    for (let i = 1; i <= 8; i++) {
        respuestasUsuario.push(document.getElementById(`answer${i}`).value.trim());
    }

    let correctas = 0;

    for (let i = 0; i < respuestasCorrectas.length; i++) {
        if (respuestasUsuario[i].toLowerCase() === respuestasCorrectas[i].toLowerCase()) {
            correctas++;
        }
    }

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Has acertado ${correctas} de ${respuestasCorrectas.length} respuestas.`;
}
