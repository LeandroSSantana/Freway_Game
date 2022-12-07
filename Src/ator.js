//Código do Ator
let xAtor = 100
let yAtor = 366
var colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor, 28,28);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++ ){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if(colisao){
      voltaInicio();
    }
  }  
}

function voltaInicio(){
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(pontos, width / 5, 28);
}

function marcaPonto(){
  if(yAtor < 15 ){
    pontos += 1
    voltaInicio()
  }
}






