

const backend = require( './backend' )


exports.command = 'create <service> [folder]'
exports.describe = 'Create a new mytn backend service'

exports.handler = function (argv) {
    // console.log(argv)
    // console.log(argv._[0])
    if (argv.service === 'formstack') {
        console.log('creating formstack')
        formstack.create(argv)
    } 
    if (argv.service === 'backend') {
        console.log('creating backend')
        backend.create(argv)
    }
    
}