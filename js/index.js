function calcular(kml, horas, kmh){
    let distancia = horas * kmh;
    let litros = distancia / kml;
    return litros.toFixed(2);
}

function mostrar(){
    const a = document.getElementById("kmlitros");
    const b = document.getElementById("time");
    const c = document.getElementById("speed");
    const kml = Number(a.value);
    const tiempo = Number(b.value);
    const vel = Number(c.value);

    let total = calcular(kml, tiempo, vel);

    const text = document.getElementById("text");
    text.innerHTML = "El carro consumió "+total+" litros de gasolina.";
}
