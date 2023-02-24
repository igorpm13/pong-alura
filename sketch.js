// Variaveis do local de começo da bola e colisão
let xBola = 300;
let yBola= 200;
let diametro = 15;
let raio = diametro / 2;

//Variaveis de local de começo da RaqueteD e Tamanho
let xRaqueteD = 5;
let yRaqueteD = 150;
let largRaqueteD = 10;
let altRaqueteD = 90;


//Váriaveis do oponente
let xRaqueteE = 585;
let yRaqueteE = 150;
let velocicadeYE;

// Variaveis de velociade da bola
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//Colisão com raquete
let colidiu = false;

//Váriaveis de pontuação
let pontosRaqueteD = 0 ;
let pontosRaqueteE = 0 ;

//sons do jogo
let ponto
let raquetada
let trilha

function preload(){
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3");
}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  startBola();
  movimentoBola();
  colisaoBola(); 
  startRaquete(xRaqueteD,yRaqueteD);
  startRaquete(xRaqueteE,yRaqueteE);
  movimentoRaqueteD();
  movimentoRaqueteE();
  //colisaoRaqueteD();
  colisaoRaquete(xRaqueteD,yRaqueteD);
  colisaoRaquete(xRaqueteE,yRaqueteE);
  incluirPlacar();
  marcarPontos();
  tocarSons();

}
function tocarSons(){
  
}

function startBola(){
  circle(xBola , yBola , diametro ) 
}
function movimentoBola(){
    yBola += velocidadeYBola
    xBola += velocidadeXBola
}
function colisaoBola(){
  if (xBola + raio > width || xBola - raio < 0){
    velocidadeXBola *= -1;
  }
  if (yBola + raio > height || yBola - raio < 0){
    velocidadeYBola *= -1;
  }
} 
function startRaquete(x,y){
  rect( x, y, largRaqueteD, altRaqueteD);
}

function movimentoRaqueteD(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteD -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteD += 10;
  }
}
function movimentoRaqueteE(){
  velocidadeYE = yBola - yRaqueteE - altRaqueteD /2-30;
  yRaqueteE += velocidadeYE ;
}
/*function colisaoRaqueteD(){
  if (xBola - raio < xRaqueteD + largRaqueteD &&  yBola - raio < yRaqueteD + altRaqueteD && yBola + raio > yRaqueteD ){
    velocidadeXBola *= -1;
  }
}**/
function colisaoRaquete(x,y){
  
  colidiu = collideRectCircle(x, y, largRaqueteD, altRaqueteD,xBola , yBola , raio);
  if(colidiu){
    velocidadeXBola *= -1;
  }
}
function incluirPlacar(){
  fill(255);
  text(pontosRaqueteD, 100 , 20);
  text(pontosRaqueteE, 500 , 20);
}
function marcarPontos(){
  if(xBola > 592){
    pontosRaqueteD += 1;
  }
  if(xBola < 8){
    pontosRaqueteE += 1;
  }
}


    
