// This file isn't transpiled, so must user CommonJS and ES5

// Register babel to transpile before our test run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
// (that means that when Mocha see import statements of CSS, 
// e.g. "import './index.css';", it will replace it with
// an empty function)
require.extensions['.css'] = function() {};

