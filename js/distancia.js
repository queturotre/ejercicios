function distancia(x, y, distDiff){
    let xKmPerMinute = (x / 60).toFixed(2);
    let yKmPerMinute = (y / 60).toFixed(2);
    let diff = 0;
    if(x < y){
        diff = (yKmPerMinute - xKmPerMinute).toFixed(2);
    }else{
        diff = (xKmPerMinute - yKmPerMinute).toFixed(2);
    }
    let tiempo = (distDiff / diff).toFixed(2);
    return tiempo;
}

function calcular(){
    const a = document.getElementById("x");
    const b = document.getElementById("y");
    const c = document.getElementById("distancia");
    const text = document.getElementById("text");

    const x = a.value; //Carro X
    const y = b.value; //Carro Y
    const z = c.value; //Distancia
    let total = distancia(x, y, z);

    text.innerHTML = "El tiempo que tarda el carro en tomar "+z+"km de distancia es: "+total+" minutos.";
}
