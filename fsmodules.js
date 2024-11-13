const { promises } = require('dns');

var fs=require('fs')
// console.log(fs)

//[callback f*n pattern]read

    // fs.readFile("students.txt",function (err,data){
    //     if(err){
    //         console.log(err.message)
    //     }
    //     else{
    //         console.log(data.toString())
    //     }
    // })

//[return based pattern]read

    //   var gd=fs.readFileSync("students.txt")
    //   console.log(gd.toString()) 

//[promises based pattern]read

    // fs.promises.readFile("students.txt").then(function(data){console.log(data.toString())}).catch(function(err){console.log(err)})

//[call back pattern [write]]

    // fs.writeFile("food.txt","tea ice cream cake",function(err,data){
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("created file")
    //     }
    // })

//[return based pattern[write]]

       // var foo=fs.writeFileSync("food.txt","tea cake")
       
//[promises based pattern[write]]

    // fs.promises.writeFile("food.txt","cake tea").then(function (data){console.log(data)}).catch(function(err){console.log(err)})

//[append for students callback]

    //    fs.appendFile("students.txt","arfan",function(err,data){
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log(data)
    //     }
    //    }) 


// [return]
//     var gf=fs.appendFileSync("students.txt",` farhan`)
//     console.log(gf)

//[Promises]
// fs.promises.appendFile("students.txt", `
// arhaan`).then(function (data){console.log(data)}).catch(function(err){console.log(err)})

//[removing file]
// fs.rm("food.txt",function(){
//     console.log(data)
// })
