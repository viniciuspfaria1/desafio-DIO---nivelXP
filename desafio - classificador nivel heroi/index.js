let xP=11000;
let hero ="vinicius";
//let nivelFerro: <1000

if (xP<1000) {
    console.log("O herói de nome" +hero+ "está no nível de ferro");
}
else if (xP>=1000 && xP<=2000) {
    console.log("O herói de nome " +hero+ " está no nível de bronze");
}
else if (xP>=2001 && xP<=5000) {
    console.log("O herói de nome " +hero+ " está no nível de prata");
}
else if (xP>=5001 && xP<=7000) {
    console.log("O herói de nome " +hero+ " está no nível de ouro");
}
else if (xP>=7001 && xP<=8000) {
    console.log("O herói de nome " +hero+ " está no nível de platina");
}
else if (xP>=8001 && xP<=9000) {
    console.log("O herói de nome " +hero+ " está no nível de ascendente");
}
else if (xP>=9001 && xP<=1000) {
    console.log("O herói de nome " +hero+ " está no nível de imortal");
}
else {
    console.log("O herói de nome " +hero+ " está no nível de radiante");
}