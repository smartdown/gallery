### TypeScript

As of Smartdown v1.0.20, the Smartdown engine is being reconstructed using [Typescript](). As of v1.0.21, Smartdown supports the dynamic compilation of Typescript in the browser via `typescript` playables.

References:
- [Using the Compiler API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)

#### A Typescript Playable

For our first example, we'll create a little `typescript` playable that just listens for changes to the `Name` variable and adjusts its `div` content accordingly. We'll use the `/debug` qualifier on the playable to allow us to view the augmented code that will transpile typescript into javascript.

The source for this playable is encoded in Smartdown like this:

````markdown
```typescript/playable/autoplay/debug
  // SOURCE goes here
```
````

with `// SOURCE goes here` being replaced by:

```typescript
this.div.style.background = 'lavender !important';
this.div.style.color = 'magenta !important';
this.div.style.padding = '10px 2px';
this.div.style.margin = '10px 2px';

this.dependOn = ['Name'];
this.depend = function(): void {
  const msg: string = ['Nice', 'to', 'meet', 'you'].join(' ');

  this.div.innerHTML = `<p>${msg}, <b>${env.Name}</b>!</p>`;
};

```

---

[What is your name?](:?Name)

```typescript/playable/autoplay/debug
this.div.style.background = 'lavender';
this.div.style.color = 'magenta';
this.div.style.padding = '10px 2px';
this.div.style.margin = '10px 2px';

this.dependOn = ['Name'];
this.depend = function(): void {
  const msg: string = ['Nice', 'to', 'meet', 'you'].join(' ');

  this.div.innerHTML = `<p>${msg}, <b>${env.Name}</b>!</p>`;
};

```


#### Invoking the TypeScript Transpiler Explicitly

Before Smartdown had a proper `typescript` playable language type, I prototyped the capability by using an ordinary Javascript playable and then using `smartdown.import` to dynamically load the TypeScript compiler via the [jsDelivr]() CDN, followed by transpiling some example source and then generating a `Function` and invoking it with the current playable's context.

[String to uppercase](:?String)
[Uppercased String](:!StringUpper)

```javascript /playable/autoplay
//smartdown.import=https://cdn.jsdelivr.net/npm/typescript@3.6.4/lib/typescript.min.js

const source =
`
this.dependOn = ['String'];
this.depend = function() {
  const upper: string = env.String.toUpperCase();
  smartdown.setVariable('StringUpper', upper);

`;

// https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#transpiling-a-single-file
  // compilerOptions?: CompilerOptions;
  // fileName?: string;
  // reportDiagnostics?: boolean;
  // moduleName?: string;
  // renamedDependencies?: Map<string>;

let result = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
  reportDiagnostics: true,
});

console.log('result.outputText', result.outputText);
if (result.diagnostics.length > 0) {
  console.log('result.diagnostics');
  console.log(result.diagnostics);
}

const argNames = [
  'playable',
  'env',
  'P5',
  'd3',
  'fc',
  'dc',
  'topojson',
  'Plotly',
  'L',
  'stdlib',
  'THREE',
  'smartdown',
  'p5'
];

var argvalues = [...arguments];

const func = new Function(...argNames, result.outputText);
try {
  return func.apply(this, argvalues);
}
catch (e) {
  console.log('#### Error playing ', language, e);
}
;
```

---

[Back to Home](:@Home)