console.log("hello V8 is running here");
console.log("hello V8 is running here");
console.log("hello V8 is running here");
// first stage the files

// git add . 
// git commit - m "message"
// git push -u origin main

// make new branch 

// git branch feature/senal/console

// now switch branches
// git checkout feature/senal/console

const fs = require('fs');
fs.readFile('file.txt', 'utf8', function(err,data){
        if(err)throw err;
        console.log(data);
})