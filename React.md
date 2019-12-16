
[Button Title](:?RJBTITLE)
[Click Counter](:!RJBCOUNTER)

```javascript /react/playable/autoplay/debug
//smartdown.import=https://cdn.jsdelivr.net/npm/solid-auth-client/dist-lib/solid-auth-client.bundle.js
//smartdown.import=https://cdn.jsdelivr.net/npm/@solid/query-ldflex/dist/solid-query-ldflex.bundle.js
//smartdown.import=https://unpkg.com/@solid/react@1.8.0/dist/solid-react.js


const innerDivId = this.div.id + '_inner';
this.div.innerHTML = `<div id="${innerDivId}"></div>`;


function Demo() {
  const popupPath = smartdown.baseURL + 'gallery/solidLoginPopup.html';
  return (
    <div>


      <h1>FOOOO</h1>
<solid.react.LoggedOut>
  <p>You are not logged in, and this is a members-only area!</p>
  <solid.react.LoginButton popup={popupPath}/>
</solid.react.LoggedOut>
<solid.react.LoggedIn>
  <p>You are logged in and can see the special content.</p>
  <solid.react.Value src="[https://ruben.verborgh.org/profile/#me].friends.firstName"/>
  <solid.react.LogoutButton/>
</solid.react.LoggedIn>
    </div>
  );
}

const domContainer = document.getElementById(innerDivId);
const component = ReactDOM.render(React.createElement(Demo), domContainer);

```

### Using React and JSX (alpha)

**Very early-stage experiment. Need to expand to include real-world components such as [Solid React SDK](https://github.com/inrupt/solid-react-sdk).**

Smartdown is by design a *reactive* system, enabling a Smartdown document to compose a set of processes (playables, cells, and variables) within a prose document. Smartdown is also about enabling the embedding of wonderful third-party technologies. It only made sense to try to integrate [ReactJS](https://reactjs.org) with Smartdown in a useful way. There are many React components that could be useful in a Smartdown document. This draft represents the first attempt at this effort.

#### Dynamic load of ReactJS and Babel

We're going to experiment with a few ways to add a [ReactJS](https://reactjs.org) component and driver code to a Smartdown document. For each example, we'll construct a `<div>` for ReactJS to render a `LikeButton` component into, and as an extra challenge, we'll make this component reactive to the current value of a Smartdown variable, which can be adjusted via a Smartdown cell. We'll also make it so that when the button is clicked, it changes a Smartdown variable which is then reflected in a cell. So basically, bidirectional reactive communication between the React world and the Smartdown world.


##### No JSX

We'll start by using existing Smartdown extension mechanisms to load React then define a `LikeButton` component *without* using JSX. Based on an example at [Add React to a Website](https://reactjs.org/docs/add-react-to-a-website.html).


[Button Title](:?RTITLE)
[Click Counter](:!RCOUNTER)

```javascript /playable
//smartdown.import=https://unpkg.com/react@16/umd/react.production.min.js
//smartdown.import=https://unpkg.com/react-dom@16/umd/react-dom.production.min.js

smartdown.setVariable('RCOUNTER', 0);
const innerDivId = this.div.id + '_inner';
this.div.innerHTML = `<div id="${innerDivId}"></div>`;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      title: '' };
  }

  clicked() {
    this.setState({ liked: true });
    smartdown.setVariable('RCOUNTER', env.RCOUNTER + 1);
  }

  render() {
    if (this.state.liked) {
      return 'You liked ' + this.state.title;
    }

    return React.createElement(
      'button',
      { onClick: () => this.clicked() },
      `Like ${this.state.title}`,
    );
  }
}

const domContainer = document.getElementById(innerDivId);
const component = ReactDOM.render(React.createElement(LikeButton), domContainer);

this.dependOn.RTITLE = () => {
  component.setState.bind(component)({
    liked: false,
    title: env.RTITLE,
  })
};

```

---


##### Using Babel to transform JSX Manually


[Button Title](:?RJTITLE)
[Click Counter](:!RJCOUNTER)

```javascript /playable/xautoplay/debug
//smartdown.import=https://unpkg.com/react@16/umd/react.development.js
//smartdown.import=https://unpkg.com/react-dom@16/umd/react-dom.development.js
//smartdown.import=https://unpkg.com/babel-standalone@6/babel.min.js

smartdown.setVariable('RJCOUNTER', 0);
const innerDivId = this.div.id + '_inner';
this.div.innerHTML = `<div id="${innerDivId}"></div>`;

const reactCode =
`
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      title: ''};
  }

  clicked() {
    this.setState({ liked: true });
    smartdown.setVariable('RJCOUNTER', smartdown.smartdownVariables.RJCOUNTER + 1);
  }

  render() {
    if (this.state.liked) {
      return 'You liked ' + this.state.title;
    }

    // Display a "Like" <button>
    return (
      <button onClick={() => this.clicked()}>
        Like {this.state.title}
      </button>
    );

  }
}

const domContainer = document.getElementById('${innerDivId}');
const rendered = ReactDOM.render(React.createElement(LikeButton), domContainer);
export default rendered;
`;
const jsCode = Babel.transform(reactCode,
    {
      presets: [
        ['es2015'], 'react', 'stage-0']
    }).code;
const jsFunction = new Function(['exports'], jsCode);
const exportsFromTransformedModule = {};
jsFunction(exportsFromTransformedModule);

this.dependOn.RJTITLE = () => {
  console.log('RJTITLE', env.RJTITLE);
  const rjcomponent = exportsFromTransformedModule.default;
  rjcomponent.setState.bind(rjcomponent)({
    liked: false,
    title: env.RJTITLE});
};
```


---


##### Using Smartdown's Babel implicitly

The above two experiments were a way to see how plausible a Smartdown/React integration would be. Once I got the above working, I add a Smartdown *extension* to support React-based playables. This simplifies the embedding of React within Smartdown, and also enables a bunch of possibilities like treating Smartdown's variables as a Redux *store* (from the React playable's point of view) which would enable more complex React integrations.

But for now, if we declare a React playable like this:

````markdown
```react /playable

// Javascript that may contain JSX goes here...

```
````

Then Babel will transpile the code, including the JSX into a Javascript fragment suitable for use as a playable. This translation is occurring when the playable is *played*, and not when the Smartdown document is compiled. I added the `/debug` qualifier to the playable definition below so that you can view the *Augmented code* that is actually running when the playable is played.


---

[Button Title](:?RJBTITLE)
[Click Counter](:!RJBCOUNTER)



```javascript /react/playable/xautoplay/debug

smartdown.setVariable('RJBCOUNTER', 0);
const innerDivId = this.div.id + '_inner';
this.div.innerHTML = `<div id="${innerDivId}"></div>`;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      title: ''};
  }

  clicked() {
    this.setState({ liked: true });
    smartdown.setVariable('RJBCOUNTER', env.RJBCOUNTER + 1);
  }

  render() {
    if (this.state.liked) {
      return 'You liked ' + this.state.title;
    }

    // Display a "Like" <button>
    return (
      <button onClick={() => this.clicked()}>
        Like {this.state.title}
      </button>
    );

  }
}

const domContainer = document.getElementById(innerDivId);
const component = ReactDOM.render(React.createElement(LikeButton), domContainer);

this.dependOn.RJBTITLE = () => {
  component.setState.bind(component)({
    liked: false,
    title: env.RJBTITLE});
};
```

---


[Back to Home](:@Home)
