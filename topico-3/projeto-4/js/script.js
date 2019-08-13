var botaoCalcular = document.querySelector("#calcular");

botaoCalcular.addEventListener("click", function(event){
    let nome = document.querySelector("#nome");
    let ab1 = document.querySelector("#ab1");
    let ab2 = document.querySelector("#ab2");
    let reav = document.querySelector("#reav");
    let matricula = document.querySelector("#matricula").value;

    let media1 = parseFloat(parseInt(parseInt(ab1.value) + parseInt(ab2.value))/2).toFixed(2);
    console.log(media1);
    if(media1 > 7){
        alert("Nome: "+nome.value+"\nMatrícula: "+matricula+"\nVocê não precisa fazer a prova");
    }
    else if (media1 < 5.5){
        alert("Nome: "+nome.value+"\nMatrícula: "+matricula+"\nVocê não poderá fazer a prova final");
    }
    else{
        let media = calculaNota(ab1.value, ab2.value, reav.value);
        var notaFinal = ((55 - parseFloat(6 * parseFloat(media)))/4.0).toFixed(2);
        alert("Nome: "+nome.value+"\nMatrícula: "+matricula+"\nVocê precisará fazer a média final e tirar: "+notaFinal);
    }
});

function calculaNota(ab1, ab2, reav){
    if(parseFloat(ab1) > parseFloat(ab2)){
        if(parseFloat(reav) > parseFloat(ab2)){
            ab2 = parseFloat(reav);
            return (parseFloat(ab1) + parseFloat(ab2))/2.0;
        }
        else{
            return (parseFloat(ab1) + parseFloat(ab2))/2.0;
        }
    }
    else if(parseFloat(ab2) > parseFloat(ab1)){
        if(parseFloat(reav) > parseFloat(ab1)){
            ab1 = parseFloat(reav);
            return (parseFloat(ab1) + parseFloat(ab2))/2.0;
        }
        else{
            return (parseFloat(ab1) + parseFloat(ab2))/2.0;
        }
    }
    else{
        if(parseFloat(reav) > parseFloat(ab1)){
            ab1 = parseFloat(reav);
            return (parseFloat(ab1) + parseFloat(ab2))/2.0;
        }
        else{
            return (parseFloat(ab1) + parseFloat(ab2))/2.0;
        }
    }
}
