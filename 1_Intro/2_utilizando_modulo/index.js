const fs = require('fs') // Arquivo do sistema 

fs.readFile('umArquivo.txt', 'utf8', (err,data) => {

    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
    
})