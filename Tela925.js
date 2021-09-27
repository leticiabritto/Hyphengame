function tela25(){
  background(imgJogar);
       
    image(imgTriste,3,110,150,150);
  
    text('Você errou!',200,150,360,200);
     
    fill('white');
    rect(148,200,230,30,10);
  
if(mouseX>=148 && mouseX<378 && mouseY>=200 && mouseY<230){
    if(mouseIsPressed){
      rect(148,200,230,30,10);
      tela=24;
    } else {
      fill('pink')
      rect(148,200,230,30,10);}}
 
      btVoltar();
      voltar();
     
    text('Tente novamente',185,222);
}