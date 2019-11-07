### Javascript

Smartdown is intended to serve a broad audience, enabling the teaching and explanation of many different subjects. Some of these subjects such as **Computer Science** and **Programming** and **Linguistics** demand the ability to express, share, explain and execute code. Smartdown embraces this idea by making it easy to *play* code fragments of various forms into the document.

Currently, only Javascript is supported within Smartdown, although it is trivial to build upon this to support per-document embedded languages.

This Javascript integration will evolve to be safer and more convenient. Currently, Smartdown variables are *strings*, and must be converted. The *reactivity* in Smartdown is currently not as good as it could be, so an explicit call to `smartdown.setVariable()` is required to trigger other cells and playables to update.

In the same way that Smartdown accommodates a diversity of *playable* languages, including GraphViz, Mermaid, and other DSLs (Domain-specific Languages), it can and eventually will include a diversity of executable languages via a *playable plugin mechanism*. Right now, though, Javascript is the primary *scripting* language for Smartdown.

#### Interaction between Javascript and a Smartdown Cell

This example is totally useless. Every time you *play* the script, it increments a Smartdown variable named `COUNTER` which is displayed here:

- [Counter](:!COUNTER)

*Hint: Click `Stop` and `Play` repeatedly to see what's going on*

```javascript /playable/autoplay
var counter = env.COUNTER || 0;
++counter;
smartdown.setVariable('COUNTER', counter, 'integer');
```

#### Using `this.div` to render a playable

Every playable is assigned a `<div>` sandbox within which it can display its content. This is used (for example) in a D3 playable which will render an SVG in the playable's `<div>`. The following example will adjust the size, border and background of the playable's `<div>` via the use of `this.div`, which points to the DOM element and permit normal DOM manipulation.

```javascript /playable/autoplay
var playableDiv = this.div;
playableDiv.style.border = '5px solid purple';
playableDiv.style.background='lightgreen';
playableDiv.innerHTML = '<h1>Hello World</h1>';

```



#### Debugging and output via the playable's console

I'm looking for better ways to report per-playable errors and per-playable logging output. I've added an experimental per-playable *console* UI, which is hidden by default. If output is written to the playable's console, a `Console` toggle button will be displayed above the content of the console.

The `this.log()` function, when invoked within a playable, will output to the playable's console.

```javascript
this.log('Hello World from this Playable!');
```

as in the following playable:

```javascript /playable/autoplay
this.log('Hello World from this Playable!');
```

#### Detecting size changes

As of Smartdown v1.024, there is an optional `this.sizeChanged()` handler available to Javascript playable authors. Here, we'll create a `this.sizeChanged()` handler to detect playable size changes to our playable, and to reflect these by changing the content of the playable.


```javascript /playable/autoplay
var that = this;
var playableDiv = this.div;
playableDiv.style.border = '5px solid magenta';
playableDiv.style.background='lightblue';

this.sizeChanged = function() {
  playableDiv.innerHTML =
`
<div style="padding:20px;">
  <h6>width:  ${playableDiv.offsetWidth}</h6>
  <h6>height: ${playableDiv.offsetHeight}</h6>
</div>
`;
};

that.sizeChanged();

setTimeout(function() {
  that.sizeChanged();
}, 0);

```

#### Using Fetch and `await/async` in playables

Smartdown by default wraps its playables in an `async` function, so that authors can *assume* that `await` will work properly in their playable. (This is all NYI as of SD 1.0.24).

For this example, we'll use the [Fetch API]() to retrieve an example JSON file (the Smartdown `package.json` in this case), and to parse and display this file in a cell.

Because the Fetch API uses Promises, we can use the [async/await]() syntactic sugar to easily manage asynchronous tasks without the requirement of nesting continuations.


##### Using an anonymous `async` wrapper (pre v1.0.25)

Prior to Smartdown 1.0.25, it was possible to use `await` by wrapping your playable code explcitly with an anonymous `async` function.

```javascript /playable/xautoplay
(async () => {
	const response = await fetch('https://unpkg.com/smartdown/package.json');
	const myJson = await response.json();
	smartdown.setVariable('PackageExplicit', myJson);
})();
```

[package.json via anonymous async](:!PackageExplicit|json)

##### Using `await` without a wrapper.

Smartdown 1.0.25 now wraps the playable's code in an implicit `async` function, which removes the need for an explicit wrapper.

```javascript /playable/xautoplay
const response = await fetch('https://unpkg.com/smartdown/package.json');
const myJson = await response.json();
smartdown.setVariable('Package', myJson);
```

[package.json via implicit async](:!Package|json)



---

[Back to Home](:@Home)
