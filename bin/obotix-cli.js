#!/usr/bin/env node

var yargs = require('yargs')
yargs.command(require('./obotix/cmd'))
  .help()
  .argv