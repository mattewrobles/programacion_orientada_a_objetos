// Programación Orientada A Objetos
// Mauricio Robles
// 2024-10-07
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let bgColor;
// let pelotas = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   bgColor = color(random(100, 230), random(0, 100), random(20, 220));
//   for(let i = 0; i<100; i++){
//       let nuevaPelota = new Pelota();
//       pelotas.push(nuevaPelota);
//   }
// }

// function draw() {
//   background(bgColor);
//   for(let i = 0; i<100; i++){
//     pelotas[i].update();
//     pelotas[i].display();
// }
// }




//   class Pelota{
//     //plano de instrucciones
//     constructor(){
//       this.rad = ceil(random(10, 50));
//       this.diametro = this.rad * 2;
//       this.posX = random(this.rad, width - this.rad);
//       this.posY = random(this.rad, height - this.rad);
//       this.velX = random(-1, 5);
//       this.velY = random(-1, 5);
//       console.log("he vivido perros")
//     }
//     //métodos
//       update(){ 
//         this.posX += this.velX;
//         this.posY += this.velY;

//         if(this.posX > width - this.rad || this.posX < this.rad){
//           this.velX *= -1; 
//           //bgColor = color(random(100, 230), random(0, 100), random(20, 220));

//         }
//         if(this.posY > height -this.rad || this.posY < this.rad){
//           this.velY *= -1; 
//           //bgColor = color(random(100, 230), random(0, 100), random(20, 220));
//         }
//       }
//       display(){
//         fill(255);
//         noStroke();
//         circle(this.posX, this.posY, this.diametro); 
//       }
//   }

let particulas = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw(){
    background(25);
    let nuevaParticula = new Particula(mouseX, mouseY);
    particulas.push(nuevaParticula);
    for(let i = 0; i < particulas.length; i++){
      particulas[i].update();
      particulas[i].display();
    }
    for(let i = 0; i < particulas.length; i++){
      if(!particulas[i].life){
        particulas.splice(i, 1);
      }
    }

    // particulas = particulas.filter((pelota)=> pelota.life);

    // noFill();
    // stroke(255, 99, 145);
    // strokeWeight(1);

    // for(let i = 0; i < particulas.length - 1; 1++){
    //     line(
    //       particulas[i].posx, 
    //       particulas[i].posy,
    //       particulas[i + 1].posy,
    //       particulas[i +1].posy,
    //     );
    // }
  }


