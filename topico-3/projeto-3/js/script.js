document.querySelector("#calcular").addEventListener("click", function(event){
    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let pratos = document.querySelector("#qtd-pratos").value;
    let suco = document.querySelector("#qtd-sucos").value;
    let sobremesa = document.querySelector("#qtd-sobremesa").value;

    let valPrato = parseFloat((pratos * 14)/1000);
    let valSuco = suco * 3;
    let valSobremesa = sobremesa * 2;
    let preco = parseInt(valPrato + valSuco + valSobremesa);

    if(idade >= 40 && idade <= 50){
        let abatimento = parseFloat(preco * 0.05).toFixed(2);
        alert("'"+nome+"'\nconsumiu:\n"+pratos+" gramas no self-service R$ "+valPrato+" reais\n"+suco+
        " sucos R$ "+valSuco+" reais\n"+sobremesa+" pratos de sobremesa R$ "+valSobremesa+" reais\nTotal "
        +preco+" reais\n"+idade+" anos\ntem 5%\n"+preco+" - "+abatimento+" = "+preco+" reais");
    }
    else if(idade > 50 && idade <= 60){
        let abatimento = parseFloat(preco * 0.1).toFixed(2);
        alert("'"+nome+"'\nconsumiu:\n"+pratos+" gramas no self-service R$ "+valPrato+" reais\n"+suco+
        " sucos R$ "+valSuco+" reais\n"+sobremesa+" pratos de sobremesa R$ "+valSobremesa+" reais\nTotal "
        +preco+" reais\n"+idade+" anos\ntem 10%\n"+preco+" - "+abatimento+" = "+preco+" reais");
    }
    else if(idade > 60){
        let abatimento = parseFloat(preco * 0.15).toFixed(2);
        alert("'"+nome+"'\nconsumiu:\n"+pratos+" gramas no self-service R$ "+valPrato+" reais\n"+suco+
        " sucos R$ "+valSuco+" reais\n"+sobremesa+" pratos de sobremesa R$ "+valSobremesa+" reais\nTotal "
        +preco+" reais\n"+idade+" anos\ntem 15%\n"+preco+" - "+abatimento+" = "+preco+" reais");
    }
    else{
        alert("'"+nome+"'\nconsumiu:\n"+pratos+" gramas no self-service R$ "+valPrato+" reais\n"+suco+
        " sucos R$ "+valSuco+" reais\n"+sobremesa+" pratos de sobremesa R$ "+valSobremesa+" reais\nTotal "
        +preco+" reais\n"+idade+" anos\ntem 0%\n"+preco+" - 0 = "+preco+" reais");
    }
});
