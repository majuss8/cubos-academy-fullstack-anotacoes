let personagem 
let grama 

let tamanho = 64

let andarX = 0
let andarY = 0

//é executada apenas uma vez ao iniciar o programa
function setup() {
  // largura, altura
  createCanvas(576, 576);
  personagem = loadImage('pngwing.com (1).png')
  grama = loadImage('grama.jfif')
}

// fica executando em looping ate que o programa seja encerrado
function draw() {
  // pode ser um número ou um conjunto de três números (0 a 255) / (red, green, blue)
  background(220);
  
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++){
    image(grama, tamanho * j, tamanho * i, tamanho, tamanho)
    }
  }
  
  //   for(let i = 0; i < 9; i++) {
  //   image(grama, tamanho * i, 64, tamanho, tamanho)
  // }
  
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  if(andarX === 512 && andarY === 512){
    rect(160, 160, 256, 256)
    textSize(35)
    text('GANHOU!!', 200, 300)
    botao = createButton('Reniciar')
    botao.mousePressed(reset)
    noLoop()
  }
  
//   text(`X: ${andarX} Y: ${andarY}`, 512, 512)
}

function reset() {
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}

// function teste() {
//   console.log('hello world!')
// }
// teste()

// UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
// é chamada uma vez sempre que uma tecla é pressionada
function keyPressed() {
  if(keyIsDown(DOWN_ARROW) && andarY < 512){
    andarY += 64
  }
  
  if(keyIsDown(UP_ARROW) && andarY > 0){
    andarY -= 64
  }
  
   if(keyIsDown(LEFT_ARROW) && andarX > 0){
    andarX -= 64
  }
  
   if(keyIsDown(RIGHT_ARROW) && andarX < 512){
    andarX += 64
  }
}






