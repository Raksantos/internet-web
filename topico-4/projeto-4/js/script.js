document.querySelector("#calcula").addEventListener("click", function() {
    let i, verificacao = 0;
    let numero = document.querySelector("#numero").value;
    for (i = 2; i < numero; i++) {
        if (numero % i == 0) {
            verificacao++;
        }
    }
    if (verificacao == 0) {
        alert(`É um número primo`);
    } else {
        alert(`Não é um número primo`);
    }
    verificacao = 0;
});