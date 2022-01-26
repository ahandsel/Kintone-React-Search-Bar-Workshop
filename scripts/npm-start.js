'use strict';
const runAll = require('npm-run-all');

runAll(['dev', 'upload'], {
  parallel: true,
  stdout: process.stdout, // Pushes printed output of each process to the terminal
  stdin: process.stdin // Kintone Customize uploader may ask for login info
}).catch(({ results }) => {
  results
    .filter(({ code }) => { // filter for code: 1
      console.log({ code });
      return code;
    })
    .forEach(({ name }) => {
      console.log(`"npm run ${name}" failed`);
    });
  console.log(results);
});

/* Example of results object
{
  name: undefined,
  code: 1,
  results: [ { name: 'dev', code: undefined }, { name: 'upload', code: 1 } ]
}
*/