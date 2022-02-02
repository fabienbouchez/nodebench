#!/usr/bin/env node
var packageJson = require('./package.json');

console.log(`=== Node benchmark v${packageJson.version} ===`)
console.log(`Node version : ${process.version} ${process.arch}\n`)
console.log('Starting benchmark');

require('./tests/http.js')();