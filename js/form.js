const canvas = document.getElementById("campo");
const ctx = canvas.getContext("2d"); //largura: 1100px e altura: 300px 550 150

//posição inical das barras
let RetPequeno = 120; 
let RetGrande = 95;
let RetPC = 95;

//variaveis do elemento bola
let bola_x = 550;
let bola_y = 150;
let vel_x = 2;
let vel_y = 2;

let vel_PC = 2;



//função do botão jogar
function jogar(){
    barra_play();
    bola();
    barra_PC();
}



function bola() {
    ctx.clearRect(175, 0, 825, 300);

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(bola_x, bola_y, 5, 0, Math.PI * 2);
    ctx.fill();

    // Atualiza a posição da bola com base na velocidade
    bola_x += vel_x;
    bola_y += vel_y;

    // Verifica se a bola atingiu a borda superior ou inferior do canvas e inverte a direção vertical
    if (bola_y < 0 || bola_y > 300) {
        vel_y = -vel_y;
    }

    //pontuação 
    if (bola_x<0){
        PC_ponto();
    }
    if (bola_x>1100){
        player_ponto();
    }

    // Verifica se a bola atingiu a barra do jogador ou do PC e inverte a direção horizontal
    if (
        (bola_x < 45 && bola_x > 35 && bola_y > RetPequeno && bola_y < RetPequeno + 80) ||
        (bola_x > 1100 - 15 && bola_x < 1100 - 5 && bola_y > RetPC && bola_y < RetPC + 120) ||
        (bola_x < 175 && bola_x + 5 > 165 && bola_y > RetGrande && bola_y < RetGrande + 120)
    ) {
        vel_x = -vel_x;
    }


    // Verifica se a bola saiu do canvas (ponto marcado) e redefine a posição
    if (bola_x < 0 || bola_x > 1100) {
        bola_x = 550;
        bola_y = 150;
        vel_x = -vel_x;
        vel_y = Math.random() > 0.5 ? 2 : -2; // Redefine a velocidade vertical da bola aleatoriamente
    }

    // Solicita uma nova animação
    requestAnimationFrame(jogar);
}



function player_ponto(){
    let pontos = document.getElementById('placar_player');
    let ganhou
    ganhou = Number(pontos.textContent) + 1;
    pontos.textContent = ganhou;
}

function PC_ponto(){
    let pontos = document.getElementById('placar_PC');
    let ganhou
    ganhou = Number(pontos.textContent) + 1;
    pontos.textContent = ganhou;
}



function barra_PC(){
    ctx.clearRect(1000, 0, 1100, 300); //apaga o canvas para redesenhar a barra

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(1000,RetPC,10,120);//180
    
    if (bola_y < RetPC) {
        RetPC -= vel_PC; // Move a barra do PC para cima
    } else if (bola_y > RetPC + 120) {
        RetPC += vel_PC; // Move a barra do PC para baixo
    }

    // Certifique-se de que a barra do PC não ultrapasse os limites do canvas
    if (RetPC < 0) {
        RetPC = 0;
    } else if (RetPC + 120 > 300) {
        RetPC = 300 - 120;
    }
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


//canvas para o desenho do relógio 
const canvas2 = document.getElementById("relogio");
const ctx2 = canvas2.getContext("2d"); //100x100 

//fundo do relógio 
ctx2.beginPath();
ctx2.arc(50, 50, 48, 0, Math.PI * 2, true);
ctx2.fillStyle = "#daa520";
ctx2.fill();
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(50, 50, 45, 0, Math.PI * 2, true);
ctx2.fillStyle = "white";
ctx2.fill();
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(50, 50, 5, 0, Math.PI * 2, true);
ctx2.fillStyle = "black";
ctx2.fill();
ctx2.stroke();

//horas
ctx2.beginPath();
ctx2.fillRect(6, 49, 8, 2);
ctx2.fillRect(87, 49, 8, 2);
ctx2.fillRect(49, 6, 2, 8);
ctx2.fillRect(49, 87, 2, 8);

//ponteiros
ctx2.beginPath();
ctx2.moveTo(48, 45);
ctx2.lineTo(48, 20);
ctx2.quadraticCurveTo(50, 15, 52, 20);
ctx2.lineTo(52, 45);
ctx2.fillStyle = "#daa520";
ctx2.fill();
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(55, 48);
ctx2.lineTo(72, 48);
ctx2.quadraticCurveTo(77, 50, 72, 52);
ctx2.lineTo(55, 52);
ctx2.fillStyle = "#daa520";
ctx2.fill();
ctx2.stroke();


