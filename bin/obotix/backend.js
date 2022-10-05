
const repo = require('./copyRepo')


exports.create = function (argv) {
    repo.copy(argv)
}