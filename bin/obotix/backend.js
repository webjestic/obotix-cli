
const repo = require('./copyRepo')


exports.create = function (argv) {
    argv.gitrepo = "https://github.com/webjestic/obotix-mservice-scaffold.git"
    repo.copy(argv)
}