 const chalk = require('chalk');
const yargs = require('yargs');
//const validator=require('validator');
const notes=require ('./notes.js');
//customize version
yargs.version('1.1..0');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{

        describe:'Note title',
        demandOption: true,
        type:'string'
    },
    body:{

        describe:'descibe body',
        demandOption: true,
        type:'string'
    }
    },
   handler(argv){
        notes.addnote(argv.title,argv.body)
    }
    
})
yargs.command({
    command: 'remove',
    describe: 'removing a new note',
    builder:{
        title:{
            descibe:'note title',
            demandOption:true,
            typr:'string'
        }

    },
   handler(argv){
        notes.removenote(argv.title);
    }
    
})
yargs.command({
    command: 'list',
    describe: 'list all note',
   handler(){
        notes.listnotes()
    }
    
})
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
   handler(argv){
        notes.readnote(argv.title)
    }
    
})
//console.log(yargs.argv);
yargs.parse();
