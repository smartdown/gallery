### P5JS Tree


```p5js/playable
var locs = [];
function calcVec(x, y) {
  return new P5.Vector(y - x, - x - y);
}

function setupField() {
  p5.createCanvas(p5.windowWidth, p5.windowHeight);

  var res = 20;
  var countX = p5.ceil(p5.width/res) + 1;
  var countY = p5.ceil(p5.height/res) + 1;

  for (var j = 0; j < countY; j++) {
    for (var i = 0; i < countX; i++) {
      locs.push( new P5.Vector(res*i, res*j) );
    }
  };

  p5.noFill();
  p5.stroke(249,78,128);
}

function drawField() {
  // p5.background(30,67,137);
  for (var i = locs.length - 1; i >= 0; i--) {
    var h = calcVec( locs[i].x - p5.mouseX, locs[i].y - p5.mouseY);
    p5.push();
      p5.translate(locs[i].x, locs[i].y);
      p5.rotate(h.heading());
      p5.line(0, 0, 0, - 15);
    p5.pop();
  };
}



var theta1;
var theta2;

// Each branch now receives
// its length as an argument.
function branch(len, thick) {
//function branch(len) {
  if (thick > 1){
    p5.strokeWeight(thick);
  }
  else{
    p5.strokeWeight(1);
  }
  p5.line(0, 0, 0, -len);
  p5.translate(0, -len);

  // Each branch’s length
  // shrinks by two-thirds.
  len *= 0.66;
  thick -= 1;

  if (len > 2) {
    p5.push();
    p5.rotate(theta1);
    // Subsequent calls to branch()
    // include the length argument.
    branch(len,thick);
    //branch(len);
    p5.pop();

    p5.push();
    p5.rotate(-theta2);
    branch(len,thick);
    //branch(len);
    p5.pop();
  }
  else{
    var c = p5.color(0, 255, 0);
    p5.fill(c);
    p5.ellipse(0,0,3,7);
  }
}

p5.windowResized = function() {
  p5.resizeCanvas(p5.windowWidth - 70, 500);
};

p5.setup = function() {
  setupField();

  p5.windowResized();
};

p5.draw = function () {
  p5.push();
  p5.background(255);

  theta1 = p5.map(p5.mouseX,0,p5.width,0,p5.PI/2);
  theta2 = p5.map(p5.mouseY,0,p5.height,0,p5.PI/2);

  // The first branch starts at the
  // bottom of the window.
  p5.translate(p5.width/2, p5.height);
  p5.stroke(0);
  branch(160,6);
  //branch(160);
  p5.pop();
  drawField();
};
```


---

[Back to Home](:@Home)

