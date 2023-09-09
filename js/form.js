const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); //largura: 1100px e altura: 300px 550 150

//posição inical das barras
let RetPequeno = 120; 
let RetGrande = 95;
let RetPC = 95;



//função do botão jogar
function jogar(){
    barra_play();
    barra_PC();
}



function barra_PC(){
    ctx.clearRect(1000, 1000, 1100, 300); //apaga o canvas para redesenhar a barra

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(1000,RetPC,10,120);//180 
}



function barra_play(){
    ctx.clearRect(0, 0, 175, 300); //apaga o canvas para redesenhar a barra

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(35,RetPequeno,10,80);//0 //220

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(165,RetGrande,10,120);//180
}



document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "W") {

        RetGrande = RetGrande-2;
        barra_play();

        if(RetGrande<0){
            RetGrande = 0;
        }
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "s" || event.key === "S") {

        RetGrande = RetGrande+2;
        barra_play();

        if(RetGrande>180){
            RetGrande = 180;
        }
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "q" || event.key === "Q") {

        RetPequeno = RetPequeno-4;
        barra_play();

        if(RetPequeno<0){
            RetPequeno = 0;
        }
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        
        RetPequeno = RetPequeno+4;
        barra_play();

        if(RetPequeno>220){
            RetPequeno = 220;
        }
    }
});
