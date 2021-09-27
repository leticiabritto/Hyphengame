var xTab=45, yTab=70, largTab=320, altTab=30, xTab2=45, yTab2=70, largTab2=20, altTab2=330;
var xLeters=45, yLeters=70, distLeters=30, largLeters=20, altLeters=30;
var selecao=0;
var xP1=345,yP1=70,largP1=20, altP1=30;

//Para a tela 1
function tela1(){
  
      background(imgIniciar);
      image(imgBalao, 60,415);
  
      fill('pink');
      rect(140,430,225,50,10)
      rect(60,38,280,22,5)
  
      noFill();
      Tab();
      Tab2();
  
      Leters();
  
      fill('white')
      btVoltar();
      voltar();
  
      textSize(18); 
      text('Você é bom em achar palavras?',70, 55);
      text('Ache uma palavra ',180,450);
      text('e responda a pergunta!',160, 470);
  
//Textos do caça palavras
      text('A N  T   I  I  N  F  L  A M A  T O  R  I  O', 50 , 95); 
      text('V O U  S N  B A  X  Z  I  N  U X  C O K',50, 120 );
      text('M P  V U  K X  Y  Z E  C  L M B  V  P U',48,150);
      text('O M A  B  R E  E S  C R E  V  E  R O L',48, 180);
      text('E  L  I  R  A  I  L  C  O O C U  P A  R M',50,210);
      text('L  P H  E  J S  T  Y  Z O W  I  S  M O P', 50, 240);
      text('U J  F   I  L  Ç P  Q W N H  D A  S M N',50, 270);
      text('N R A  N  T  I  H  I  G   I  E  N  I  C  O R', 50,300);
      text('J  F  Ç S  G D F  E  Z  B E  O M U A  D', 50,330);
      text('F A  E G  D P  Q O L  U  X K  M U T  H',50,360);
      text('R T  S U  A U  T  O E S  T   I  M A W G', 50,390);

//Primeira palavra, pergunta na tela 5
    if(mouseX >345 && mouseX<365 && mouseY>70 && mouseY<100){
      if(mouseIsPressed){
      tela=5;
      somApertar.play();
      }
     }
//Segunda palavra, pergunta na tela 8
    if(mouseX >215 && mouseX<245 && mouseY >380 && mouseY<410){
      if(mouseIsPressed){
      tela=8;
      //somApertar.play();
      }
     }
//Terceira palavra, pergunta na tela 10
    if(mouseX>305 && mouseX<325 && mouseY>380 && mouseY<410){
      if(mouseIsPressed){
      tela=10;
      //somApertar.play();
      }
     }
//Quarta palavra, pergunta na tela 12
  if(mouseX>325 && mouseX<345 && mouseY>190 && mouseY<220){
    if(mouseIsPressed){
    tela=12;
    //somApertar.play();
    }
   }
//Quinta palavra, pergunta na tela 14
  if(mouseX>325 && mouseX<345 && mouseY>280 && mouseY<310){
    if(mouseIsPressed){
    tela=14;
    //somApertar.play();
    }
   }
//Sexta palavra, pergunta na tela 16
  if(mouseX>305 && mouseX<325 && mouseY>160 && mouseY<190){
    if(mouseIsPressed){
    tela=16;
    //somApertar.play();
    }
   }
  
//Para cada letra da primeira linha ficar rosa quando o mouse estiver em cima
function Leters(){
  yLeters=70;
  for(contador=0; contador<=10; contador++){
    xLeters=25;
    for(contador2=0; contador2<16; contador2++){
      xLeters=xLeters+20;
      if(mouseX > xLeters && mouseX < xLeters+largLeters && mouseY > yLeters && mouseY < yLeters+altLeters){
        fill('pink');
        rect(xLeters, yLeters, largLeters, altLeters);
      
        if (mouseIsPressed){
        selecao=1;
          //somApertar.play();
        fill('red');
        rect(xLeters, yLeters, largLeters, altLeters); 
        text('Parece que achou uma palavra!',125,420);}  
      }
    }
    yLeters = yLeters+30;
  }
}  
  
//Linhas da tabela
  function Tab(){
      yTab=70;
      for(contador=0; contador<11; contador++){
      rect (xTab, yTab, largTab, altTab);
      yTab=yTab+30;
    }
}
  
//Colunas da tabela
  function Tab2(){
        xTab2=45;  
      for(contador=0; contador<15; contador++){
      rect (xTab2, yTab2, largTab2, altTab2);
      xTab2=xTab2+20;
    }
}
      
function mouseClicked(){ 
      selecao=1; 
      fill('red'); 
      rect(xLeters, yLeters, largLeters, altLeters); 
    }
}