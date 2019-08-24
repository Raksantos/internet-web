let i = 1,
    aux, soma = 0,
    quarado;

for (aux = 0; aux < 10; aux++) {
    quadrado = i * i;
    soma += quadrado;
    document.write(`<p>Número atual: ${i} <br>
                    Quadrado do número: ${quadrado} <br>
                    Soma Parcial: ${soma} <br> <br>
                    </p>
                    
                    `);
    i++;
}