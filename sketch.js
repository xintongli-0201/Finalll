class CreativeSketch {
  constructor() {
    this.shapes = [];
    // 增加更多的马卡龙色调
    this.colors = ['#FFB6C1', '#FF91A4', '#A1C6EA', '#B0E0E6', '#F0E68C', '#FF6347'];
  }

  addShape(shape) {
    this.shapes.push(shape);
  }

  drawShapes() {
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].update();
      this.shapes[i].display();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.sketch = new CreativeSketch();

  // 添加多个Shape对象
  for (let i = 0; i < 5; i++) {
    let shape = new Shape(random(width), random(height), random(30, 60), random(window.sketch.colors));
    window.sketch.addShape(shape);
  }
}

function draw() {
  // 每一帧重绘背景并生成随机线条
  background(255);
  drawRandomBackground();

  window.sketch.drawShapes();

  // 设置文本的随机位置
  fill(0);
  textSize(32);
  text('xintong li', random(width), random(height)); // 随机移动的文本
}

// 随机生成背景线条
function drawRandomBackground() {
  strokeWeight(2);
  for (let i = 0; i < 10; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    stroke(random(200, 255), random(100, 255), random(200, 255), 50);  // 使用透明度让线条不太显眼
    line(x1, y1, x2, y2);
  }
}
