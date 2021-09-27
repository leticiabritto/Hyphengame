var Palavras=['Palavra 1','Palavra 2','Palavra 3','Palavra 4','Palavra 5'];
var xr=140,yr=95,largr=110,altr=35,distr=70;

function tela19(){
  background(imgJogar)
    
//Para os retângulos das palavras
    fill('white')
    yr=95;
      for(contador=0; contador<5; contador++){
      rect (xr, yr, largr, altr,10);
      yr=yr+70;}
  
//Para voltar
    btVoltar();
    voltar();
    
//Para quando apertar P1 tela20
  if(mouseX>140 && mouseX<250 && mouseY>95 && mouseY<130){
    if(mouseIsPressed){
    rect (140, 95, 110, 35,10);
    tela=20;
    } else{
      fill('#F2F5A9')
      rect (140, 95, 110, 35,10);}
  }
//P2, tela22
  if(mouseX>140 && mouseX<250 && mouseY>165 && mouseY<200){
    if(mouseIsPressed){
    rect (140, 165, 110, 35,10);
    tela=22;
    } else{
      fill('#F2F5A9')
      rect (140, 165, 110, 35,10);}
  }
//P3, tela 24
  if(mouseX>140 && mouseX<250 && mouseY>235 && mouseY<270){
    if(mouseIsPressed){
    rect (140, 235, 110, 35,10);
    tela=24;
    } else{
      fill('#F2F5A9')
      rect (140, 235, 110, 35,10);}
  }
//P4,tela 26
  if(mouseX>140 && mouseX<250 && mouseY>305 && mouseY<340){
    if(mouseIsPressed){
    rect (140, 305, 110, 35,10);
    tela=26;
    } else{
      fill('#F2F5A9')
      rect (140, 305, 110, 35,10);}
  }
//P5,tela 28
  if(mouseX>140 && mouseX<250 && mouseY>375 && mouseY<410){
    if(mouseIsPressed){
    rect (140, 375, 110, 35,10);
    tela=28;
    } else{
      fill('#F2F5A9')
      rect (140, 375, 110, 35,10);}
  }
  
//Vetores para as palavras
    var x=150,y=120,cont=0;
    
    fill(0);
    textSize(20);
    text('Escolha uma palavra surpresa!',70,70);  
  
    for(cont=0;cont<5;cont++){
      text(Palavras[cont],x,y);
      y=y+70
    }
}