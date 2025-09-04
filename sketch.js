function setup() {
  createCanvas(400, 400);
}
let xJogador1 =0;
let xJogador2 =0;

function draw() {
  ativaJogo()
  desenhaJogadores()
  desenharLinhaDeChegada()
  verificarVencedor()
}

function ativaJogo(){
  if(focused == true){
    background(200)
  } else{
    background("rgb(73,252,62)");
  }
}
function desenhaJogadores() {
  textSize(40)
  text("🦖",xJogador1,100)
  text("🐉",xJogador2,200)
}

function desenharLinhaDeChegada(){
  fill("white")
  rect(350,0,10,400)
  fill("black")
  for(let yAtual = 0; yAtual< 400; yAtual+=20){
    rect(350,yAtual,10.400)}
}

function verificarVencedor() {
  if (xJogador1 >350){
    text("Jogador 1 venceu !",50,200)
    noLoop();
  }
  if (xJogador2 >350){
    text("jogador 2 venceu !",50,200)
    noLoop();
}
}
          
  function keyReleased(){
    if (key =="a"){
      xJogador1 += random(20);
    }
    if (key =="s"){
      xJogador2 += random(20);
    }
  }
{
  
}