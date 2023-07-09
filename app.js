// const base = 15;
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

                


console.clear();

// console.log(process.argv);
// const [ , , arg3= 'base=5' ] = process.argv
// const [, num ] = arg3.split('=');


crearArchivo( argv.b, argv.l, argv.e )
    .then(nombreArchivo => console.log(nombreArchivo, ' creado'))
    .catch(err => console.log(err));