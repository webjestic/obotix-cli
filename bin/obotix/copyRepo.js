

const conf = require('config')
const fs = require('fs')
const shell = require('shelljs')


exports.copy = function (argv) {

    const serviceRepo = `${argv.service}.repo`

    const localDir = process.cwd()
    const targetDir = localDir + "/" + argv.folder
    const oldGitDir = targetDir + '/.git'
  
    // clone git repo into desired project name
    try {
        console.log(`Creating ${argv.folder}...`)
        let cmd = `git clone ${conf.get(serviceRepo)} ${argv.folder}`
        let result = shell.exec(cmd)
        if (result.code === 0) console.log(`${argv.folder} successfully created.`)
        fs.rmSync(oldGitDir, { recursive: true, force: true })
    } catch (error) {
        console.log('ERROR', error)
    }

    return true
}
