document.querySelector(".calcular").addEventListener("click", function (event){
    let lado1 = document.querySelector(".lado-1").value;
    let lado2 = document.querySelector(".lado-2").value;
    let lado3 = document.querySelector(".lado-3").value;

    if(lado1 > parseInt(lado2) + parseInt(lado3)){
        alert("Nenhum triângulo pode ser formado");
    }
    else if((lado1 * lado1) == parseInt((lado2 * lado2) + (lado3 * lado3))){
        alert("O triângulo é retângulo");
    }
    else if((lado1 * lado1) > parseInt((lado2 * lado2) + (lado3 * lado3))){
        alert("O triângulo é obtusângulo");
    }
    else if((lado1 * lado1) < parseInt((lado2 * lado2) + (lado3 * lado3))){
        alert("O triângulo é acutângulo");
    }
});
