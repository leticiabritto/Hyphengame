function tela18(){
    background(imgJogar);
    image(imgPiscando,250,350,120,120);
  
    fill('white');

    rect(95,200, 200, 40,10);
    rect(95, 280, 200, 40,10);
    
    btVoltar();
    voltar();

    textSize(22);
    
  if(mouseX>95 && mouseX<295 && mouseY>200 && mouseY<240){
    if(mouseIsPressed){
    somApertar.play();
    rect(95,200, 200, 40,10);
    tela=19;
  } else {
    fill('pink');
    rect(95,200, 200, 40,10);
  }
 }

  if(mouseX>95 && mouseX<295 && mouseY>280 && mouseY<320){
    if(mouseIsPressed){
    rect(95, 280, 200, 40,10);
    tela=1;
    somApertar.play();
  } else {
    fill('pink');
    rect(95, 280, 200, 40,10);
    }
  }
    fill('#E0F8F7')
    rect(38,75,340,30,5);
  
    fill('black')
    text('Escolha ou encontre uma palavra',45,100)
    text("Escolher palavra",110, 228);
    text("Encontrar palavra",110, 310);

}