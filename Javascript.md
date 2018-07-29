## Javascript

Smartdown is intended to serve a broad audience, enabling the teaching and explanation of many different subjects. Some of these subjects such as **Computer Science** and **Programming** and **Linguistics** demand the ability to express, share, explain and execute code. Smartdown embraces this idea by making it easy to *play* code fragments of various forms into the document.

Currently, only Javascript is supported within Smartdown, although it is trivial to build upon this to support per-document embedded languages.

This Javascript integration will evolve to be safer and more convenient. Currently, Smartdown variables are *strings*, and must be converted. The *reactivity* in Smartdown is currently not as good as it could be, so an explicit call to `smartdown.setVariable()` is required to trigger other cells and playables to update.

In the same way that Smartdown accommodates a diversity of *playable* languages, including GraphViz, Mermaid, and other DSLs (Domain-specific Languages), it can and eventually will include a diversity of executable languages via a *playable plugin mechanism*. Right now, though, Javascript is the primary *scripting* language for Smartdown.

---

This example is totally useless. Every time you *play* the script, it increments a Smartdown variable named `COUNTER`.

[Counter](:!COUNTER)


```javascript/playable
var counter = env.COUNTER || 0;
++counter;
smartdown.setVariable('COUNTER', counter, 'integer');
```

---

The following code will adjust the size, border and background of the playable's `<div>` via the use of `this.div`, which points to the DOM element and permit normal DOM manipulation.

```javascript/playable
var playableDiv = this.div;
playableDiv.style.border = '5px solid purple';
playableDiv.style.background='lightgreen';
playableDiv.innerHTML = '<h1>Hello World</h1>';

```

---

[Back to Home](:@Home)
