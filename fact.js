// for(var i=0;i<=5;i++){
//     console.log(i)
// }                (demo)

    // function fact(n){
    //         var f=1;
    //         for(i=n;i>=1;i--){
    //                 f=f*n;
    //         }
    //         return f;                    (nrml)
    // }
    //   console.log(fact(5)) 
    
    
// error handling with call back f*n

    // function fact(n,cd){
    //     var f=1;
    //     if(isNaN(n)||n<1){
    //         cd("invalid output")
    //     }
    //     else{
    //         for(var i=n;i>=1;i--){
    //             f=f*n;
    //         }                              
    //         cd(null,f)
    //     }
    // }
    // fact("reshma",function(err,res){
    //             if(err){
    //                 console.error(err)
    //             }
    //             else{
    //                 console.log(res)
    //             }
    // })

 //promises with error handling 

    // function fact(n){
    //     var f=1;
    //     if(isNaN(n)||n<1){
    //         return Promise.reject("invalid output")
    //     }
    //     else{
    //         for(var i=n;i>=1;i--){
    //             f=f*n;
    //         }
    //         return Promise.resolve(f)
    //     }
    // }
    // fact(5)
    // .then(function (res){
    //     console.log(res)
    // })
    // .catch(function (err){
    //     console.error(err)
    // }
        
    // )


//async with error handling 
    // async function fact(n){
    //     var f=1;
    //     if(isNaN(n)||n<1){
    //         return Promise.reject("invalid output")
    //     }
    //     else{
    //         for(i=n;i>=1;i--){
    //             f=f*n;
    //         }
    //         return f
    //     }
    // }
    // fact ("res").then(function(res){
    //     console.log(res)
    // }).catch(function(err){
    //     console.log(err)
    // })
    

//1.[Add to numbers]
//(err with call back f*n)

        // function add(x,y,abc){
        //     var sum=0
        //     if(isNaN(x)||isNaN(y)){
        //         abc("invalid input")
        //     }
        //     else{
        //         sum=x+y 
        //     }
        //     abc(sum)
        // }
        // add("res",5,function(err,res){
        //                 if(err){
        //                     console.error(err)
        //                 }
        //                 else{
        //                     console.log(res)
        //                 }
        //     })
//(promises with error handling )

        // function add(x,y){
        //     var sum=0;
        //     if(isNaN(x)){
        //         return Promise.reject("x is not a valid input")
        //     }
        //     else{
        //         if(isNaN(y)){
        //             return Promise.reject("y is not a valid input")
        //         }
        //         else{
        //             sum=x+y;
        //         }
        //         return Promise.resolve(sum)
        //     }
        // }
        // add(5,"po").then(function(res){
        //     console.log(res)
        // }).catch(function(err){
        //     console.log(err)
        // })

//(async with error handling )  

    // async function add(x,y) {
    //     var sum=0;
    //     if(isNaN(x)){
    //         return Promise.reject("x is not a valid input")
    //     }
    //     else{
    //         if(isNaN(y)){
    //             return Promise.reject("y is not a valid input")
    //         }
    //         else{
    //             sum=x+y
    //         }
    //         return Promise.resolve(sum)
    //     }
    // }
    // add(3,"gds").then(function(res){
    //     console.log(res)
    // }).catch(function (err){
    //     console.log(err)
    // })

// 2.greatest of three numbers
//(call back with err)
        // function greatest(x,y,z,abc){
        //    var max=+Infinity;
        //     if(isNaN(x),isNaN(y),isNaN(z)){
        //         abc("invalid input")
        //     }
        //     else{
        //         if(max<x){
        //             max=x
        //             if(y>max){
        //                 max=y
        //             }else{
        //                 if(z>max){
        //                     max=z
        //                 }
        //             }
        //             abc(max)  
        //         }
        //     }
        // }
        // greatest("po",2,3,function(err,res){
        //     if(err){
        //         console.log(err)
        //     }
        //     else{
        //         console.log(res)
        //     }
        // })

//(promise with err)

    // function greatest(x,y,z){
    //     if(isNaN(x)||isNaN(y)||isNaN(z)){
    //         return Promise.reject("invalid")
    //     }
    //     else{
    //         if(x>y){
    //             if(x>z){
    //                 return Promise.resolve(x)
    //             }
    //             else{
    //                 if(z>y){
    //                     return Promise.resolve(z)
    //                 }
    //             }
    //         }
    //         else{
    //             if(y>z){
    //                 return Promise.resolve(y)
    //             }
    //             else{
    //                 if(z>x){
    //                     return Promise.resolve(z)
    //                 }
    //             }
    //         }
    //     }
    //     }
        
    // greatest(1,2,3).then(function(res){
    //         console.log(res)
    //      }).catch(function(err){
    //          console.log(err)
    //      })


//3.ascending order 
//(Promise)

        function asce(x,y,z){
            if(isNaN(x)||isNaN(y)||isNaN(z)){
                         return Promise.reject("invalid")
                    }
                    else{
                        if(x>y){
                                        if(x>z){
                                            return Promise.resolve(x)
                                        }
                                        else{
                                            if(z>y){
                                                return Promise.resolve(z)
                                            }
                                        }
                                    }
                                    else{
                                        if(y>z){
                                            return Promise.resolve(y)
                                        }
                                        else{
                                            if(z>x){
                                                return Promise.resolve(z)
                                            }
                                        }
                                    }
                                }
                                }
                                
                            asce(1,2,3).then(function(res){
                                    console.log(res)
                                 }).catch(function(err){
                                     console.log(err)
                                 })
                    