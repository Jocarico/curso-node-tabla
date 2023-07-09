const fs = require('fs')

const crearArchivo = async(base, listar, end) => {
    
    try {
        
    
        let salida = '';

        for(let i = 1; i <= end; i++){
            salida += `${ base } x ${i} = ${base * i}\n`
        }

        if (listar){
            console.log('================');
            console.log(`Tabla del: ${base}`);
            console.log('================');
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}


module.exports = { crearArchivo };