## p5.play Examples

[p5.play](https://github.com/molleindustria/p5.play) is a Javascript library that extends the functionality of p5.js with animation, sprites, and collision detection, amongst other features. We will be using the [code.org fork](https://github.com/code-dot-org/p5.play) of p5.play, because it appears to be more maintained currently.

The following example From [Making Games with p5.play](https://creative-coding.decontextualize.com/making-games-with-p5-play/) uses `smartdown.import` to dynamically load the p5.play library, and then it draws a field of 'coins' which you can gather up by moving your mouse around.

**Warning** This use of p5.play is at a very early stage, and there are negative interactions between the p5.play library and ordinary p5.js code. For example, p5.play modifies the p5.camera function and turns it into an object. This is not well-behaved and results in other p5.js examples (e.g., Mobius) not working. The workaround for now is to NOT run the p5.play examples except for experimental purposes, and if you do run a p5.play example, remember to reload your Smartdown page to eliminate the negative effects on your p5.js library. This is a fixable problem, but requires more study.


```P5JS/playable/debug
//smartdown.import=https://cdn.rawgit.com/code-dot-org/p5.play/master/lib/p5.play.js

window.allowP5PlayInit = false;

var Group = p5.Group;
var createSprite = p5.createSprite.bind(p5);
var drawSprites = p5.drawSprites.bind(p5);

var coins;
var player;
var score = 0;
function setup() {
  createCanvas(400, 400);
  coins = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
  player = createSprite(50, 50, 40, 40);
  player.shapeColor = color(255);
}
function draw() {
  background(50);
  player.velocity.x =
    (mouseX-player.position.x)*0.1;
  player.velocity.y =
    (mouseY-player.position.y)*0.1;
  player.overlap(coins, getCoin);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;
}
```


---

[Back to Home](:@Home)

