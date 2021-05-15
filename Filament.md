### Filament

This [Smartdown](https://smartdown.io) document shows how [Filament](https://github.com/joshmarinacci/filament-lang) may be utilized within a Smartdown environment, and provides some examples.

The source for this Smartdown document should be visible at [Filament.md](gallery/Filament.md#-blank)

#### To Be Done

- Implement Smartdown *reactivity*, so that the Filament playable can affect Smartdown variables, and so that the playable can choose to react to changes in Smartdown variables.
- Figure out how to size the Canvas to be responsive. Might require Javascript :(


### Examples using the Smartdown/Filament Plugin

The examples are derived from the [/test](https://github.com/joshmarinacci/filament-lang/tree/master/test) examples in the Filament repository. If the output of the Filament playable is an Object, then it is displayed in the playable's console log. If it is a function, then a Canvas element is created for the function to draw into. The current implementation assumes an 800x800 Canvas, ad

Click the `Play` button at the top of each playable to execute Javascript code that will in turn execute the Filament code. Clicking the `Augmented Code` button will reveal the actual JavaScript code that Smartdown will be executing; this is useful for debugging.


#### Evaluate the Filament expression `42ft`.

One of the most basic Filament examples. Currently, the Smartdown Filament integration by default displays the `Object` returned by Filament, as well as the `toString()` representation.

```filament /playable/debug
42ft
```


#### Plot a Heart

Based on [filament-lang/test/plot.test.js](https://github.com/joshmarinacci/filament-lang/blob/70cbdd75d0b9edf3573be4f69c666c6232108fca/test/plot.test.js#L141), this playable will use Filament to plot a 2D curve that looks like a heart.


```filament /playable/debug
{
  def px3(t:?) { (16 * (sin(t)**3))/10 }
  def py3(t:?) { (13 * cos(t) - 5 * cos (2*t) - 2 * cos(3*t) - cos(4*t))/10 }
  plot(x:px3, y:py3)
}
```



#### Lissajou

Based on [filament-lang/test/plot.test.js](https://github.com/joshmarinacci/filament-lang/blob/70cbdd75d0b9edf3573be4f69c666c6232108fca/test/plot.test.js#L111)


```filament /playable/debug
{
  def px2(theta:?) {
      sin(2*theta)
  }
  def py2(theta:?) {
      sin(3*theta)
  }
  plot(x:px2,y:py2)
}
```

#### Turtle a Flower

This uses Filament's `turtle` capability to draw a flower. Based upon [filament-lang/test/turtle.test.js](https://github.com/joshmarinacci/filament-lang/blob/70cbdd75d0b9edf3573be4f69c666c6232108fca/test/turtle.test.js#L116)

```filament /playable/debug
{
  turtle_start(0,0,0)
  turtle_pendown()
  arc << () -> {
      map(range(120), with:(n)->{
        turtle_forward(2)
        turtle_right(1)
      })       
  }
  leaf << () -> {
      arc()
      turtle_right(60)
      arc()
      turtle_right(60)
  }
  
  range(36) >> map(with: () -> {
      leaf()
      turtle_right(10)
  })
  
  turtle_penup()
  turtle_done()
}
```

#### Statehood Date by Year by Decade Histogram

Based upon [filament-lang/docs/tutorial.md](https://github.com/joshmarinacci/filament-lang/blob/70cbdd75d0b9edf3573be4f69c666c6232108fca/docs/tutorial.md#histograms), this histogram displays statehood date by year by decade.


```filament /playable/debug
{
  states << dataset('states')
  get_year << state -> {
      field << get_field(state, 'statehood_date')
      dt << date(field, format:"MMMM dd, yyyy")
      get_field(dt,'year')
  }
  years << map(states, with:get_year)
  histogram(years, bucket:10)
}           
```


#### Scatter the Planets

A scatterplot based upon [filament-lang/test/chart.test.js](https://github.com/joshmarinacci/filament-lang/blob/70cbdd75d0b9edf3573be4f69c666c6232108fca/test/chart.test.js#L41)


```filament /playable/debug

{
  planets << dataset('planets')
  chart(planets, type:'scatter', 
                    x:'orbital_radius',
                    y:'mean_radius',
                 size:'mean_radius',
                 name:'name'
            )
}
```


### Exploring Filament without the Smartdown Plugin

One of Smartdown's features is the ability to dynamically load external Javascript Libraries (either as ESModules or as UMD Libraries), and to then *exercise* these libraries. See [Extensions](:@Extensions) for more information on this technique.

Before adding Filament as a Smartdown plugin (using the `filament` playable qualifier), it was available via the general-purpose Extension mechanism. I've included some examples below. The only real difference is that the Filament library is explicitly loaded via `smartdown.import` instead of being implicitly loaded via the plugin mechanism.


#### 42ft

Evaluate the Filament expression `42ft`.

```javascript /playable
//smartdown.import=https://unpkg.com/filament-lang@0.4.3/dist/filament.js

await Filament.setup_parser()

let ret = await Filament.eval_code('42ft')
this.log('we should have a scalar with 42 and feet for the unit:' + ret);

```

#### Plot a Heart

Based on [filament-lang/test/plot.test.js](https://github.com/joshmarinacci/filament-lang/blob/70cbdd75d0b9edf3573be4f69c666c6232108fca/test/plot.test.js#L141), this playable will use Filament to plot a 2D curve that looks like a heart.

```javascript /playable
//smartdown.import=https://unpkg.com/filament-lang@0.4.3/dist/filament.js

const canvasId = this.div.id + '_canvas';
this.div.innerHTML =
`
<canvas
  id="${canvasId}"
  style="display: block; margin: auto; border: 5px solid blue;"
  width="500"
  height="500"></canvas>
`;

const canvas = document.getElementById(canvasId);

await Filament.setup_parser()

const heartCode =
`
{
  def px3(t:?) { (16 * (sin(t)**3))/10 }
  def py3(t:?) { (13 * cos(t) - 5 * cos (2*t) - 2 * cos(3*t) - cos(4*t))/10 }
  plot(x:px3, y:py3)
}
`;

let ret = await Filament.eval_code(heartCode);
ret.cb(canvas);

```

---

[Back to Home](:@Home)

