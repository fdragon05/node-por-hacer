const  descripcion = {
    demand: true,
     alias: 'd',
     desc: 'Descripción de la tarea por hacer'
}

completado =  {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea'
} 


const argv = require('yargs')
             .command('crear', 'Crear un elemento por hacer',{
                 descripcion
             })
             .command('actualizar', 'Actualiza el estado completado de la tarea',{
                descripcion,
                completado
                
            })
            .command('borrar', 'Borra un elemento por hacer',{
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}