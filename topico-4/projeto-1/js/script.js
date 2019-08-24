document.querySelector("#calcula").addEventListener("click", function() {
    let i = 1;
    let aux;
    for (aux = 1; aux < 16; aux++) {
        i *= 2;
    }
    alert(`A quantidade de erros do aluno foi ${i}`);
});