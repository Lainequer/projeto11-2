 var menino, RunnerImg,edges;
 var rua, PathImg;
 let rentangulo1,rentangulo2;
 function preload(){
  //imagens pré-carregadas
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  PathImg = loadImage ("path.png");
  
}

function setup(){
  createCanvas(400,600);
  //crie sprite aqui
  
  edges = createEdgeSprites();
   rua = createSprite (200,200,10,10); 
   rua.addImage ("asfalto",PathImg);
   rua.velocityY = 5;
   menino = createSprite (200,550,10,10);
   menino.addAnimation ("boy",RunnerImg);
   menino.scale = 0.05;
   rentangulo1 = createSprite(30,300,10,600)
   rentangulo2 = createSprite (380,300,10,600)
    
  }

function draw() {
  background("0");
  rentangulo2.visible = false;
  rentangulo1.visible = false;
  menino.x = World.mouseX;
  menino.collide(rentangulo1);
  menino.collide(rentangulo2);
  if(rua.y>400){
    rua.y = rua.width/2 
   }
  drawSprites();
}
