document.querySelector(".botao").addEventListener("click", function(event){
    let a = document.querySelector("#a");
    let b = document.querySelector("#b");
    let c = document.querySelector("#c");

    let delta = parseInt(b.value * b.value);
    delta = parseInt(delta - (4 * a.value * c.value));

    if (delta > 0) {
        var x1 = parseFloat(((-1 * b.value) + (Math.sqrt(delta)))/ (2 * a.value)).toFixed(2);
        var x2 = parseFloat(((-1 * b.value) - (Math.sqrt(delta)))/ (2 * a.value)).toFixed(2);
        alert("a = "+a.value+"\nb = "+b.value+"\nc = "+c.value+"\nDelta = "+delta+"\nSim, tem raízes reais\nraiz1 = "+x1+"\nraiz2="+x2);
    }
    else if(delta == 0){
        var x1 = parseFloat((-1 * b.value)/(2 * a.value)).toFixed(2);
        alert("a = "+a.value+"\nb = "+b.value+"\nc = "+c.value+"\nDelta = "+delta+"\nPossui duas raízes reais iguais a 0\nraiz1 = "+x1);
    }

    else{
        alert("a = "+a.value+"\nb = "+b.value+"\nc = "+c.value+"\nDelta = "+delta+"\nNão possui raízes reais");
    }
});
