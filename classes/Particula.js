class Particula {
  constructor(_x, _y, _size) {
    this.posX = _x;
    this.posY = _y;
    this.life = true;
    this.timeLife = round(random(10, 40));
    this.size = _size; // Initialize with the given size
    this.color = random(100, 200), 250, 30;
    this.trans = 150;
  }

  update() {
    if (this.timeLife <= 0 || this.posY < this.size / 2) {
      this.life = false;
      return;
    }

    this.trans -= 10;
    this.posY -= 10;
    this.posX += random(20, 150);
    this.size += random(1, 30);
    this.timeLife -= 5;
  }

  display() {
    push();
    translate(this.posX, this.posY);
    fill(
      this.life ? color(244, 69, 96, this.trans) : color(255, 251, 20, this.trans)
    );
    noStroke();

    // Draw circle
    ellipse(0, 0, this.size);

    pop();
  }

  static drawGradientBackground(c1, c2) {
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 2);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y);
    }
  }
}
