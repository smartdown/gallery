function someFunc(myDiv, myMsg) {

  //
  // Now I don't have to be indented for the UMD wrapper.
  //
  console.log('In someFunc()', myDiv, myMsg);
  myDiv.innerHTML =
`
<div style="background:lightyellow;border:5px solid darkslateblue;">
  <h3>ExtensionsPlayableUMDImport.js was here</h3>
  <pre>${myMsg}</pre>
</div>
`;
}

//
// Standard UMD boilerplate to export someFunc
//
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.example = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  // expose someFunc

  exports.someFunc = someFunc;
});

