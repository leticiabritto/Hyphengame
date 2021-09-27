function tela30(){
  background(imgJogar);
    
    image(imgFeliz,5,120,150,150);
  
    text('Parabéns, você acertou!',155,150,360,200);
     
    fill('white');
    rect(148,230,230,30,10);
  
if(mouseX>=148 && mouseX<378 && mouseY>=230 && mouseY<260){
    if(mouseIsPressed){
      rect(148,230,230,30,10);
      tela=19;
    } else {
      fill('pink')
      rect(148,230,230,30,10);}}
 
      btVoltar();
      voltar();
     
    text('Voltar para escolher',160,252);
}