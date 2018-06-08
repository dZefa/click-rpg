require('babel-polyfill');
require('babel-register');

const environment = process.argv[2];

if (!environment) {
  throw Error(`Please provide an argument to bin/entry.js`);
  process.exit();
}

if (environment === 'development') {
  const path = require('path');

  require('dotenv').config({
    path: path.resolve(__dirname, '../.env'),
  });
}

require('../server');
