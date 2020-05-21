const fs=require('fs');
const chalk=require('chalk');

const addnote=(title,body)=>{
      const notes=loadnotes();
      const duplicatenotes=notes.filter((note)=> note.title===title);
      const duplicate=notes.find((note)=> note.title===title)
    //   const duplicatenotes=notes.filter(function(note){
    //     return note.title===title;
    // })
    
      if(!duplicatenotes){

      
      notes.push({
          title:title,
          body:body
      })
      savenotes(notes);
      console.log("new notes added:");
}else{
    console.log('note title taken');
}}
const removenote=(title)=>{
    const notes=loadnotes()
    const notestokeep=notes.filter((note)=>note.title!==title);
    if(notes.length>notestokeep.length){
       console.log(chalk.green.inverse('Note removed'));
       savenotes(notestokeep);
    }
    else{
        console.log(chalk.red.inverse('no note found'));
    }}
    const listnotes=()=>{
        const notes=loadnotes()
      console.log(chalk.inverse('your notes'))
      notes.forEach((note)=>{
          console.log(note.title)
      })
    
    }
    const readnote=(title)=>{
     const notes=loadnotes()
     const note=notes.find((note)=>note.title===title)
     if(note){
     console.log(chalk.inverse(note.title))
     console.log(note.body)
     }else{
         console.log(chalk.red.inverse('note not found'))
     }
    }
 const savenotes=(notes)=>{
 const datajson=JSON.stringify(notes);
 fs.writeFileSync('notes.json',datajson);
 }
const loadnotes=()=>{
    try{
    const databuffer=fs.readFileSync('notes.json');
    const datajson=databuffer.toString();
    return JSON.parse(datajson);

    }
    catch (e){
       return [];
    }
    

}
module.exports={
    addnote:addnote,
    removenote:removenote,
    listnotes:listnotes,
    readnote:readnote

}