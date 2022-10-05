

const backend = require( './backend' )

exports.command = 'create <service> [folder]'
exports.describe = 'Create a new mytn backend service'

exports.handler = function (argv) {

    if (argv.service === 'backend') {
        console.log('creating backend')
        backend.create(argv)
    }
    
}