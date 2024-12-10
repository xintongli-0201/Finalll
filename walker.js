// walker.js
class Shape {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }

    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    this.drawHeart(this.x, this.y, this.size);  // 使用爱心图案代替圆形
  }

  drawHeart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 2, x, y + size);
    bezierVertex(x + size, y + size / 2, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
  }
}
