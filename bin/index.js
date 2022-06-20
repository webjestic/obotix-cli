#! /usr/bin/env node

// https://github.com/yargs/yargs/blob/HEAD/docs/examples.md
// https://www.npmjs.com/package/yargs


//const yargs = require('yargs')
// const boxen = require('boxen')
// const chalk = require('chalk')

/*
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv)
console.log(process.argv)
*/

/*
btix [options] 
btix [command] [options]
btix [command] [subcommand] [options]  
*/

const argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 [options] ')
  .usage('Usage: $0 [command] [options]')
  .example('$0 create -n myApp -t frontend')
  .command('create', 'Creates a new project')
  .command('upgrade', 'Upgrades an existing project')
  .alias('t', 'type')
  .nargs('t', 1)
  .describe('t', 'Project type (backend or frontend)')
  .alias('n', 'name')
  .nargs('n', 1)
  .describe('n', 'Project name')
 // .demandOption(['t'])
  .argv;


if (argv.action) console.log(argv.action);
if (argv.type) console.log(argv.type);
if (argv.name) console.log(argv.name);

