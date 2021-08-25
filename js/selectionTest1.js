function aceptar(a,b,c,d){
    if((b>c) && (d>a) && ((c+d)>(a+b)) && (c > 0 && d>0) && (a %2==0)){
        return "Lo lograste!!!"; 
    } else {
        return "Intenta de nuevo"; 
    }
}

function consultar(){
    const primero = document.getElementById("a");
    const segundo = document.getElementById("b");
    const tercero = document.getElementById("c");
    const cuarto = document.getElementById("d");
    let texto = document.getElementById("text");
    const a = Number(primero.value);
    const b = Number(segundo.value);
    const c = Number(tercero.value);
    const d = Number(cuarto.value);
    let total = aceptar(a,b,c,d);
    texto.innerHTML = total;
}


