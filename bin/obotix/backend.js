
const repo = require('./copyRepo')


exports.create = function (argv) {
    argv.gitrepo = "https://github.com/webjestic/obotix-mservice-scaffold.git"
    repo.copy(argv)

    console.log('')
    console.log('### NEXT STEPS: TODO')
    console.log('')
    console.log(`cd backend ${argv.folder}`)
    console.log('echo NODE_ENV=devlopment > .env')
    console.log('')
    console.log('# NOTE: use with git version >= 2.28.0')
    console.log('git init -b main')
    console.log('# NOTE: git version < 2.28.0')
    console.log('git init && git symbolic-ref HEAD refs/heads/main ')
    console.log('')
    console.log('git add . && git commit -m "initial commit from CLI scaffold"')
    console.log('git remote add origin <REMOTE_URL>')
    console.log('')
    console.log('git remote -v')
    console.log('git push -u origin main')
    console.log('')


}