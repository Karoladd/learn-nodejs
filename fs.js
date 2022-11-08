var fs = require('fs')

//Show code in js
fs.readFile('calc.js', 'utf8', function(err,data){
    console.log(data)
})

//Create a new js
fs.writeFile('calc1.js','console.log("done")', function(err){
    console.log("Data Saved")
})
//Delete js
fs.unlink('calc1.js', function(err){
    console.log("Deleted")
})