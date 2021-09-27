var tela=0;
var imgPrincipal, imgInstruçoes, imgDescriçao, imgCreditos, imgIniciar, imgBalao, imgIn, imgAnim, imgJogar, imgPis, imgPiscando;
var xVoltar = 5, yVoltar = 5, largVoltar=80, altVoltar=30;

function preload(){
  imgPrincipal=loadImage('Imagens/Imagem menu.jpeg');
  imgInstruçoes=loadImage('Imagens/Instruções.jpeg');
  imgDescriçao=loadImage('Imagens/Descriçao.jpeg');  
  imgCreditos=loadImage('Imagens/Creditos.jpeg');
  imgIniciar=loadImage('Imagens/Iniciar.jpg');
  imgBalao=loadImage('Imagens/Pisc.png');
  imgIn=loadImage('Imagens/Legg.png');
  imgAnim=loadImage('Imagens/Surpresa.png');
  imgJogar=loadImage('Imagens/jogar.jpg');
  imgPis=loadImage('Imagens/Pis.png');
  imgFeliz=loadImage('Imagens/feliz.webp');
  imgDuvida=loadImage('Imagens/duvida.webp');
  imgSorte=loadImage('Imagens/Sorte.webp');
  imgTriste=loadImage('Imagens/Triste.webp');
  imgPiscando=loadImage('Imagens/Piscando.webp');
  somApertar=createAudio('Sons/Apertar.mp3')
  somErrar=createAudio('Sons/Errou.mp3')
  somAcertar=createAudio('Sons/Acertou.mp3')
} 

//Para o botão voltar
function btVoltar(){
      rect(xVoltar,yVoltar,largVoltar,altVoltar,1);
      textSize(20)
      fill('black');
      text('Voltar',20, 27);
}
function voltar(){
    if(mouseX<=xVoltar+largVoltar && mouseX>=xVoltar && mouseY<=yVoltar+altVoltar && mouseY>=yVoltar){
    if(mouseIsPressed){
    btVoltar();
    tela=0;
      somApertar.play();
  } else {
    fill('pink');
    btVoltar();}}  
}

function setup() {
  createCanvas(400, 600);}

function draw() {
  if(tela==0){
     menu();
 
  } else if (tela == 1){
    tela1();
  } else if (tela == 2){
    tela2();    
  } else if (tela == 3){
    tela3();
  } else if (tela == 4){
    tela4();
  } else if (tela == 5){
    tela5();
  } else if (tela == 6){
    tela6();
  } else if (tela == 7){
    tela7();
  } else if (tela == 8){
    tela8();
  } else if (tela == 9){
    tela9();
  } else if (tela == 10){
    tela10();
  } else if (tela == 11){
    tela11();
  } else if (tela == 12){
    tela12();
  } else if (tela == 13){
    tela13();
  } else if (tela == 14){
    tela14();
  } else if (tela == 15){
    tela15();
  } else if (tela == 16){
    tela16();
  } else if (tela == 17){
    tela17();
  } else if (tela == 18){
    tela18();
  } else if (tela == 19){
    tela19();
  } else if (tela == 20){
    tela20();
  } else if (tela == 21){
    tela21();
  } else if (tela == 22){
    tela22();
  } else if (tela == 23){
    tela23();
  } else if (tela == 24){
    tela24();
  } else if (tela == 25){
    tela25();
  } else if (tela == 26){
    tela26();
  } else if (tela == 27){
    tela27();
  } else if (tela == 28){
    tela28();
  } else if (tela == 29){
    tela29();
  } else if (tela == 30){
    tela30();
  }
}