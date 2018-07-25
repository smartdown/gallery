## Extension Mechanisms for Smartdown

Smartdown tries to be extensible at several levels. One of these is the per-environment level that enables a teacher, for example, to create a topic-specific set of media and API urls (see `calc_handlers.js`, which is mostly undocumented right now).

At the author level, Smartdown provides a *limited* form of dynamic loading (currently under development) which enables a playable author to specify external library dependencies, and the Smartdown engine will ensure that:

- No library is loaded before the playable is executed.
- No playable will execute until its library dependencies are loaded.
- A library will only be loaded once per smartdown environment (which is currently synonymous with the browser's `window`).
- Libraries will be loaded in the order they are specified in the playable.
- No library will load until its preceding libraries in the same playable have loaded.

So far, it seems to work. The target libraries tend to be CDN-hosted libraries intended to be included with a `<script>` tag.

### Dynamic load of SVG.js

We'll start with something simple, a Javascript library called [svgjs.com](http://svgjs.com) that provides a high-level language to build SVG elements and place them into the DOM. We'll use this to put an SVG into the current smartdown div. But we'll need to ensure that the `svg.js` library is loaded before we execute, or our playable will fail. The use of the `smartdown.use` clause below will let Smartdown know to load that library before trying to compile and execute the rest of the playable code.


```javascript/playable/debug
//smartdown.use=https://cdnjs.cloudflare.com/ajax/libs/svg.js/2.6.5/svg.min.js

// foo

var draw = SVG(this.div).size(500, 100)
var rect = draw.rect(500, 100).attr({ fill: '#f06' })

```


### Dynamic load of VueJS

Let's get a little fancier and embed a [VueJS](https://vuejs.org) app. We'll construct a `<div>` for VueJS to draw into, and as an extra challenge, we'll make the content reactive to the current value of the `NAME` variable, which can be adjusted via the Smartdown cell below this playable.


```javascript/playable
//smartdown.use=https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js

const innerDivId = this.div.id + '_inner';

this.div.innerHTML =
`<div id="${innerDivId}">
  <h4>Hello {{ name }}</h4>
</div>`;

const vm = new Vue({
  el: `#${innerDivId}`,
  data: {
    name: ''
  },
  mounted() {
    this.setName('');
  },
  methods: {
    setName(name) {
      this.$nextTick(_ => {
        this.name = name;
      });
    }
  }
});


this.dependOn = ['NAME'];
this.depend = function() {
  vm.setName(env.NAME);
};

```


[What is your name?](:?NAME)

### Combining VueJS and SVG.js

Here we'll specify that we want both the VueJS and the SVG.js libraries loaded. In this particular case, the order of loading doesn't matter. But Smartdown ensures that they are loaded sequentially (it is an optimization to load them in parallel).

```javascript/playable
//smartdown.use=https://cdnjs.cloudflare.com/ajax/libs/svg.js/2.6.5/svg.min.js
//smartdown.use=https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js

const innerVueId = this.div.id + '_vue';
const innerSVGId = this.div.id + '_svg';

this.div.innerHTML =
`
<div id="${innerVueId}">
  <h4>Hello {{ name }}</h4>
</div>

<div id="${innerSVGId}">
</div>
`;


const vm = new Vue({
  el: `#${innerVueId}`,
  data: {
    name: '',
    draw: null
  },
  mounted() {
    this.setName('');
  },
  methods: {
    setName(name) {
      this.$nextTick(_ => {
        this.name = name;
      });

      if (this.draw) {
        this.draw.remove();
      }
      this.draw = SVG(innerSVGId);
      this.draw.size(500, 100);
      this.draw.rect(500, 100).attr({ fill: '#fef' });
      var text = this.draw.plain('Hello ' + name);
      text.move(10, 50);
      text.font({
        family:   'Helvetica'
      , size:     44
      , leading:  '1.5em'
      });

      text.fill({color: '#00F'});
    }
  }
});


this.dependOn = ['NAME'];
this.depend = function() {
  vm.setName(env.NAME);
};

```


---


[Back to Home](:@Home)
