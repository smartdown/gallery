## P5JS

Smartdown integrates the wonderful [P5.js](https://p5js.org/) Javascript library, which provides a way for authors to embed *sketches* within their Smartdown documents.


### P5JS Ellipse Example


```p5js/playable
p5.setup = function() {
};

p5.draw = function() {
  p5.ellipse(50, 50, 80, 80);
};
```


### P5JS Sound Oscillator Frequency Example

Here is the [P5JS Sound Oscillator Frequency Example](https://p5js.org/examples/examples/Sound_Oscillator_Frequency.php).

```p5js/playable
var osc, fft;

p5.setup = function () {
  p5.createCanvas(420, 256);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.5);
  osc.owner = p5;

  fft = new p5.FFT();
  fft.owner = p5;
  osc.start();
};

p5.draw = function () {
  p5.background(255);

  var waveform = fft.waveform();  // analyze the waveform
  p5.beginShape();
  p5.strokeWeight(5);
  for (var i = 0; i < waveform.length; i++) {
    var x = p5.map(i, 0, waveform.length, 0, p5.width);
    var y = p5.map(waveform[i], -1, 1, p5.height, 0);
    p5.vertex(x, y);
  }
  p5.endShape();

  // change oscillator frequency based on mouseX
  var freq = p5.map(p5.mouseX, 0, p5.width, 40, 880);
  osc.freq(freq);
  var amp = p5.map(p5.mouseY, 0, p5.height, 1, .01);
  osc.amp(amp);
};
```


### P5JS Playback Rate Example

Here is the [P5JS Playback Rate Example](https://p5js.org/examples/examples/Sound_Playback_Rate.php). Load a SoundFile and map its playback rate to mouseY, volume to mouseX.


```p5js/playable
// A sound file object
var song;

p5.preload = function () {
  // Load a sound file
  song = p5.loadSound(p5.exampleSound);
  song.owner = p5;
};

p5.windowResized = function() {
  p5.resizeCanvas(p5.windowWidth - 70, 100);
};

p5.setup = function () {
  p5.createCanvas(100, 100);
  p5.windowResized();
  // Loop the sound forever
  // (well, at least until stop() is called)
  song.loop();
};

p5.draw = function () {
  p5.background(200);

  // Set the volume to a range between 0 and 1.0
  var volume = p5.map(p5.mouseX, 0, p5.width, 0, 1);
  volume = p5.constrain(volume, 0, 1);
  song.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  var speed = p5.map(p5.mouseY, 0.1, p5.height, 0, 2);
  speed = p5.constrain(speed, 0.01, 4);
  song.rate(speed);

  // Draw some circles to show what is going on
  p5.stroke(0);
  p5.fill(51, 100);
  p5.ellipse(p5.mouseX, 100, 48, 48);
  p5.stroke(0);
  p5.fill(51, 100);
  p5.ellipse(100, p5.mouseY, 48, 48);
};
```

### More P5JS Examples

[P5JS Mobius](:@Mobius)
[P5JS Conic Sections](:@Conic)
[P5JS Game](:@Games)
[P5JS Tree](:@Tree)
[P5JS VectorField](:@VectorField)
[P5JS VectorTree](:@VectorTree)

---

[Back to Home](:@Home)

