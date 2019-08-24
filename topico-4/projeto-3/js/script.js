let i;

loop:
    for (i = 0; i < 10; i++) {
        console.log(i);

        let nome = prompt("Nome: ");
        let media = parseFloat(prompt("Média: "));
        calculaBolsa(nome, media);
    }

function calculaBolsa(nome, media) {
    if (media >= 9) {
        document.write(`Nome: ${nome} <br>
                            Média: ${media} <br>
                            Recomendação: altamente recomendado <br><br>`);
    } else if (media < 9 && media >= 8) {
        document.write(`Nome: ${nome}<br>
                            Média: ${media}<br>
                            Recomendação: fortemente recomendado <br><br>`);
    } else if (media < 8 && media >= 7) {
        document.write(`Nome: ${nome} <br>
                            Média: ${media} <br>
                            Recomendação: recomendado <br><br>`);
    } else {
        document.write(`Nome: ${nome} <br>
                            Média: ${media} <br>
                            Recomendação: não recomendado <br><br>`);
    }
}