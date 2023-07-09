const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: 'Es la base de la tabla para multiplicar'
    })            
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Es la opcion para mostrar la lista'
    })
    .option('e', {
        alias: 'end',
        type: 'number',
        default: 10,
        describe: 'Es la opcion para marcar un limite en la tabla'
    })
    .check( (argv, options) => {
        if( isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
                .argv;

module.exports = argv;