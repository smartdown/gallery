# FlankerIntroduction
---

### Flanker Experiment

I really like the [Flanker Experiment](https://github.com/jspsych/jsPsych/blob/master/examples/demo-flanker.html) example, and have adapted it to Smartdown.

The cool thing (IMHO) about this experiment is to see how your reaction time is increased when the context is *distracting* vs *reinforcing*.


```javascript /playable/autoplay
//smartdown.import=https://unpkg.com/jspsych@6.0.0/jspsych.js
//smartdown.import=https://unpkg.com/jspsych@6.0.0/plugins/jspsych-html-keyboard-response.js
//smartdown.import=https://unpkg.com/jspsych@6.0.0/plugins/jspsych-image-keyboard-response.js

env.flankerData = undefined;

const myDiv = this.div;
myDiv.style.border = '1px solid red';
// myDiv.style.width = '500px';
myDiv.style.height = '400px';
myDiv.style.margin = 'auto';

smartdown.importCssUrl('https://unpkg.com/jspsych@6.0.0/css/jspsych.css');
smartdown.importCssCode(
`
#${myDiv.id} .jspsych-content img {
 height: 200px;
}
`);

const imgPrefix = '/gallery/resources/';

var reps_per_trial_type = 1;

var welcomeBlock = {
  type: 'html-keyboard-response',
  stimulus: 'Welcome to the experiment. Press any key to begin.'
};


const instructionsStimulus =
`
<p>
  In this task, you will see five arrows on the screen, like the example below.
</p>
<img src="${imgPrefix}inc1.png"></img>
<p>
Press the left arrow key if the middle arrow is pointing left. (<)
</p>
<p>
Press the right arrow key if the middle arrow is pointing right. (>)
</p>
<p>
Press any key to begin.
</p>
`;


var instructionsBlock = {
  type: 'html-keyboard-response',
  stimulus: instructionsStimulus,
  post_trial_gap: 1000
};


var testStimuli = [
  {
    stimulus: imgPrefix + 'con1.png',
    data: { stim_type: 'congruent', direction: 'left'}
  },
  {
    stimulus: imgPrefix + 'con2.png',
    data: { stim_type: 'congruent', direction: 'right'}
  },
  {
    stimulus: imgPrefix + 'inc1.png',
    data: { stim_type: 'incongruent', direction: 'right'}
  },
  {
    stimulus: imgPrefix + 'inc2.png',
    data: { stim_type: 'incongruent', direction: 'left'}
  }
];


/* defining test timeline */
var testBlock = {
  timeline: [{
    type: 'image-keyboard-response',
    choices: [37, 39],
    trial_duration: 1500,
    stimulus: jsPsych.timelineVariable('stimulus'),
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data){
      var correct = false;
      if (data.direction == 'left' &&  data.key_press == 37 && data.rt > -1) {
        correct = true;
      }
      else if (data.direction == 'right' && data.key_press == 39 && data.rt > -1) {
        correct = true;
      }

      data.correct = correct;
    },
    post_trial_gap: function() {
        return Math.floor(Math.random() * 1500) + 500;
    }
  }],
  timeline_variables: testStimuli,
  sample: {type: 'fixed-repetitions', size: reps_per_trial_type}
};


var debriefBlock = {
  type: 'html-keyboard-response',
  stimulus: function() {
    var total_trials = jsPsych.data.get().filter({trial_type: 'image-keyboard-response'}).count();
    var accuracy = Math.round(jsPsych.data.get().filter({correct: true}).count() / total_trials * 100);
    var congruent_rt = Math.round(jsPsych.data.get().filter({correct: true, stim_type: 'congruent'}).select('rt').mean());
    var incongruent_rt = Math.round(jsPsych.data.get().filter({correct: true, stim_type: 'incongruent'}).select('rt').mean());
    const result =
`
<p>
  You responded correctly on <strong>${accuracy}%</strong> of the trials.
</p>
<p>
  Your average response time for congruent trials was <strong>${congruent_rt}ms</strong>.
</p>
<p>
  Your average response time for incongruent trials was <strong>${incongruent_rt}ms</strong>.
</p>
<p>
Press any key to complete the experiment. Thank you!
</p>
`;
    return result;
  }
};


/*set up experiment structure*/
var timeline = [];
timeline.push(welcomeBlock);
timeline.push(instructionsBlock);
timeline.push(testBlock);
timeline.push(debriefBlock);

jsPsych.init({
  on_trial_start: function() {
    myDiv.focus();
  },
  timeline: timeline,
  display_element: myDiv,
  on_finish: function() {
    const experimentData = jsPsych.data.get().values();
    smartdown.setVariable('flankerData', experimentData);
  }
});


window.setTimeout(function() {
  const top = myDiv.offsetTop - 40;
  document.body.scrollTop = top; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = top; // For IE and Firefox
  myDiv.focus();
}, 0);

```


---

[View Flanker Data](:@ViewFlankerData)

---

[Repeat Experiment](:@JSPsych/Flanker)

---

[Back to jsPsych Home](:@JSPsych)


# ViewFlankerData
---

The `jsPsych` results from the previous experiment have been captured in the Smartdown variable `experimentData`, which we can display in raw JSON format via a Smartdown [Cell]()

[Experiment Data](:!flankerData|json)

[Visualize the Results](:@VisualizeFlankerData)

---

[Repeat Experiment](:@JSPsych/Flanker)

---

[Back to jsPsych Home](:@JSPsych)


# VisualizeFlankerData
---

Now that we have the data gathered via `jsPsych` in a Smartdown variable, we can use other tech to visualize the data. Since this is a first draft, we'll just do something pretty, but meaningless. We'll just build a pie-chart that shows the correct vs incorrect percentages. We'll use [Plotly](https://smartdown.site/#gallery/Plotly.md), which is a nice library built upon [D3](https://smartdown.site/#gallery/D3.md) that makes it easy to make charts and graphs.

We're going to have to write a little code to make this visualization happen.

```plotly/autoplay/playable
const myDiv = this.div;
myDiv.innerHTML = `<h3>Waiting for flankerData to be available</h3>`;
this.dependOn = ['flankerData'];
this.depend = function() {
  myDiv.innerHTML = '';
  const experimentData = env.flankerData;
  const correctVsIncorrect = [0, 0];
  experimentData.forEach((trial) => {
    if (trial.correct !== undefined) {
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

  Plotly.newPlot(myDiv, data, layout, {displayModeBar: false});
}

```

---

[Repeat Experiment](:@JSPsych/Flanker)

---

[Back to jsPsych Home](:@JSPsych)
