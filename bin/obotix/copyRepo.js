

const debug = require('debug')('app:formstack')
const conf = require('config')
const fs = require('fs')
const shell = require('shelljs')


exports.copy = function (argv) {
    console.log(argv)
    console.log(argv._[0])

    const serviceRepo = `${argv.service}.repo`

    debug('argv %O', argv)
    const localDir = process.cwd()
    const targetDir = localDir + "/" + argv.folder
    const oldGitDir = targetDir + '/.git'
    debug('argv %O', argv) 
    debug('pwd       :', localDir)
    debug('targetDir :', targetDir)
    debug('oldGitDir :', oldGitDir)
  
    // clone git repo into desired project name
    try {
        console.log(`Creating ${argv.folder}...`)
        let cmd = `git clone ${conf.get(serviceRepo)} ${argv.folder}`
        debug('cmd', cmd)
        let result = shell.exec(cmd)
        debug('result', result)
        if (result.code === 0) console.log(`${argv.folder} successfully created.`)
        fs.rmSync(oldGitDir, { recursive: true, force: true })
    } catch (error) {
        console.log('ERROR', error)
    }

    return true
}
