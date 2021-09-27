var xMenu=95, yMenu=160,distMenu=80, largMenu=200, altMenu=40, yMenu2=yMenu+distMenu, yMenu3=yMenu2+distMenu, yMenu4=yMenu3+distMenu;

 //Para os botões do menu
function btMenu1(){
  rect(xMenu, yMenu, largMenu, altMenu,10);
}
function btMenu2(){
  rect(xMenu, yMenu2, largMenu, altMenu,10);
}
function btMenu3(){
  rect(xMenu, yMenu3, largMenu, altMenu,10);
}
function btMenu4(){
  rect(xMenu, yMenu4, largMenu, altMenu,10);
}

// Para a tela de menu
function menu(){
  background(imgPrincipal);
  image(imgIn, 40, 90);
  textSize(32)
  fill('white');
  btMenu1();
  btMenu2();
  btMenu3();
  btMenu4();
  
//Se o mouse passar por cima ficar rosa, se clicar, ir para a tela de destino
    if(mouseX<=xMenu+largMenu && mouseX>=xMenu && mouseY<=yMenu+altMenu && mouseY>=yMenu){
    if(mouseIsPressed){
    btMenu1();
    tela=18;
    somApertar.play();
  } else {
    fill('pink');
    btMenu1();
  }
}
    if(mouseX<=xMenu+largMenu && mouseX>=xMenu && mouseY<=yMenu2+altMenu && mouseY>=yMenu2){
    if(mouseIsPressed){
    btMenu2();
    tela=2;
    somApertar.play();
  } else {
    fill('pink');
    btMenu2();
  }
}
    if(mouseX<=xMenu+largMenu && mouseX>=xMenu && mouseY<=yMenu3+altMenu && mouseY>=yMenu3){
    if(mouseIsPressed){
    btMenu3();
    tela=3;
    somApertar.play();
  } else {
    fill('pink');
    btMenu3();}}
  
    if(mouseX<=xMenu+largMenu && mouseX>=xMenu && mouseY<=yMenu4+altMenu && mouseY>=yMenu4){
    if(mouseIsPressed){
    btMenu4();
    tela=4;
    somApertar.play();
  } else {
    fill('pink');
    btMenu4();
  }
}
    fill('black');
    text('Iniciar',xMenu+45, yMenu+35);
    text('Instruções',xMenu+28, yMenu2+35)
    text('Descrição', xMenu+31, yMenu3+35)
    text('Creditos',xMenu+35,yMenu4+35)
    }
