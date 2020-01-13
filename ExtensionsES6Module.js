// lib.js
const PI = 3.1415926;

function sum(...args) {
  log('sum', args);
  return args.reduce((num, tot) => tot + num);
}

function mult(...args) {
  log('mult', args);
  return args.reduce((num, tot) => tot * num);
}

// private function
function log(...msg) {
  console.log('ExtensionsES6Module: ', ...msg);
}

console.log('ExtensionsES6Module.js loading');

let note = {
	note: ''
};

export { PI, sum, mult, note };
