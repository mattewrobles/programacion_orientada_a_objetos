class Particula{
  //este metodo se ejecuta automaticamente
  constructor(_x, _y){
      this.posx = _x;
      this.posy = _y;
      this.life = true;
      //* timeLife es el tiempo de vida
      this.timeLife = round(random(10, 50));
      this.size = 10;
      this.color = random(100, 230), 250, 30;
      this.trans = 100;
  }
  update(){
    // this.timeLife -= 1;
    if(this.timeLife <= 0){
      this.life = false;
      return;
    }
    if(this.posy < this.size/2){
    this.life = false;
    return;
    }

    this.trans -= 0.5;
    this.posy -= 10;
    this.posx += random(30, 100);
    this.size += 30;
  }
  display(){
    if(this.life){
        fill(0, 255, 0, this.trans); // Verde si está viva
    } else {
        fill(255, 0, 20, this.trans); // Rojo si está muerta
    }
    noStroke();
    circle(this.posx, this.posy, this.size);
}
}
