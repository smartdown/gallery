## jsPsych

# Home
---

I recently discovered [jsPsych](https://www.jspsych.org), which is best described by its creators:

> jsPsych is a JavaScript library for running behavioral experiments in a web browser. The library provides a flexible framework for building a wide range of laboratory-like experiments that can be run online.

I wanted to see whether it *played well* with Smartdown, and created this document to explore what a Smartdown/jsPsych integration might look like. I mostly plan on adapting some of the jsPsych examples and using Smartdown to visualize the data produced by an experiment.

### Reaction Time Experiment

We'll start by adapting the [Reaction Time Experiment Tutorial](https://www.jspsych.org/tutorials/rt-task/) example, whose final source is [demo-simple-rt-task.html](https://github.com/jspsych/jsPsych/blob/master/examples/demo-simple-rt-task.html).

Some of the modifications I've made to the original, to get it to fit better into a Smartdown document:

- I've used CSS to reduce the size of the circles.
- I've simplified the code to be more readable, by taking advantage of modern Javascript features like [Template Literals](https://developer.a.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
- I'm currently using the `smartdown.import` syntax to dynamically load `jsPsych` into the document (see [Extension Mechanisms for Smartdown](https://smartdown.site/#gallery/Extensions.md)). If the `jsPsych` integration proves promising, I will build a *first-class* embedding in the same way that [P5JS](https://smartdown.site/#gallery/P5JS.md) and [D3](https://smartdown.site/#gallery/D3.md) are embedded.
- Rather than relying upon jsPsych's `data.displayData()` function, I instead use `get().values()` to extract the experiment data into a Smartdown variable, so that it can be subsequently visualized.
- I converted the double-quotation marks into single-quotes when in Javascript, because that is how I roll. Similarly, I replaced `snake_case` identifiers with `camelCase`.

[Reaction Time Experiment](:@ReactionTimeExperiment)


# ReactionTimeExperiment
---


```javascript/playable/autoplay
//smartdown.import=https://unpkg.com/jspsych@6.0.0/jspsych.js
//smartdown.import=https://unpkg.com/jspsych@6.0.0/plugins/jspsych-html-keyboard-response.js
//smartdown.import=https://unpkg.com/jspsych@6.0.0/plugins/jspsych-image-keyboard-response.js

const myDiv = this.div;

smartdown.importCssUrl('https://unpkg.com/jspsych@6.0.0/css/jspsych.css');
smartdown.importCssCode(
`
#${myDiv.id} .jspsych-content img {
  width: 100px;
}
`);

const imgPrefix = '/gallery/resources/';
myDiv.style.width = '500px';
myDiv.style.height = '300px';
myDiv.style.margin = 'auto';

const timeline = [];

const welcomeStimulus = 'Welcome to the experiment. Press any key to begin.';
const welcomeBlock = {
  type: 'html-keyboard-response',
  stimulus: welcomeStimulus
};
timeline.push(welcomeBlock);


const instructionsStimulus =
`
<p>
A circle will appear in the center of the screen.
</p>
<p>
If the circle is <strong>blue</strong> press the letter F on the
keyboard as fast as you can.
</p>
<p>If the circle is <strong>orange</strong>, press the letter J
as fast as you can.</p>
<div
  style="float: left; width: 200px;">
  <img src="${imgPrefix}blue.png"></img>
  <p class="small">
    <strong>Press the F key</strong>
  </p>
</div>
<div
  style="float: right; width: 200px;">
  <img src="${imgPrefix}orange.png"></img>
  <p class="small">
    <strong>Press the J key</strong>
  </p>
</div>
`;

var instructionsBlock = {
  type: "html-keyboard-response",
  stimulus: instructionsStimulus,
  post_trial_gap: 2000
};
timeline.push(instructionsBlock);


var testStimuli = [
  { stimulus: imgPrefix + "blue.png", data: { test_part: 'test', correct_response: 'f' } },
  { stimulus: imgPrefix + "orange.png", data: { test_part: 'test', correct_response: 'j' } }
];

const preloadImages = testStimuli.map(s => s.stimulus);

const trialTimes = [250, 500, 750, 1000, 1250, 1500, 1750, 2000];
var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: function(){
    return jsPsych.randomization.sampleWithoutReplacement(trialTimes, 1)[0];
  },
  data: {test_part: 'fixation'}
}

var test = {
  type: 'image-keyboard-response',
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: ['f', 'j'],
  data: jsPsych.timelineVariable('data'),
  on_finish: function(data){
    data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
  },
}

var test_procedure = {
  timeline: [fixation, test],
  timeline_variables: testStimuli,
  repetitions: 5,
  randomize_order: true
}
timeline.push(test_procedure);

/* define debrief */

var debriefBlock = {
  type: 'html-keyboard-response',
  stimulus: function() {

    var trials = jsPsych.data.get().filter({test_part: 'test'});
    var correct_trials = trials.filter({correct: true});
    var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
    var rt = Math.round(correct_trials.select('rt').mean());

    const result =
`
<p>
  You responded correctly on ${accuracy}% of the trials.
</p>
<p>
  Your average response time was ${rt}ms.
</p>
<p>
  Press any key to complete the experiment. Thank you!
</p>
`;
    return result;
  }
};
timeline.push(debriefBlock);


// https://www.jspsych.org/core_library/jspsych-core/#jspsychinit
// https://www.jspsych.org/core_library/jspsych-core/#parameters_7
jsPsych.init({
  on_trial_start: function() {
    myDiv.focus();
  },
  preload_images: preloadImages,
  display_element: myDiv,
  timeline: timeline,
  on_finish: function() {
    // jsPsych.data.displayData();

    const experimentData = jsPsych.data.get().values();
    smartdown.setVariable('experimentData', experimentData);
  },
});

window.setTimeout(function() {
  const top = myDiv.offsetTop - 40;
  document.body.scrollTop = top; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = top; // For IE and Firefox
  myDiv.focus();
}, 0);

```

---

[View the Results](:@ViewResults)


# ViewResults
---

The `jsPsych` results from the previous experiment have been captured in the Smartdown variable `experimentData`, which we can display in raw JSON format via a Smartdown [Cell]()

[Experiment Data](:!experimentData|json)

[Visualize the Results](:@VisualizeResults)


# VisualizeResults
---

Now that we have the data gathered via `jsPsych` in a Smartdown variable, we can use other tech to visualize the data. Since this is a first draft, we'll just do something pretty, but meaningless. We'll just build a pie-chart that shows the correct vs incorrect percentages. We'll use [Plotly](https://smartdown.site/#gallery/Plotly.md), which is a nice library built upon [D3](https://smartdown.site/#gallery/D3.md) that makes it easy to make charts and graphs.

We're going to have to write a little code to make this visualization happen.

```plotly/autoplay/playable
const experimentData = env.experimentData;
const correctVsIncorrect = [0, 0];
experimentData.forEach((trial) => {
  if (trial.test_part === 'test') {
    if (trial.correct) {
      correctVsIncorrect[0] += 1;
    }
    else {
      correctVsIncorrect[1] += 1;
    }
  }
});
var data = [{
  values: correctVsIncorrect,
  labels: ['Correct', 'Incorrect'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot(this.div, data, layout, {displayModeBar: false});

```

[Congruence Example](:@Congruene)
[Back to Home](:@Home)
