console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a<0.5){
        reject('SOrry, Random number is not supporting you!')
    }
    else{
        setTimeout(() => {
            console.log('I am in SetTimeout')
            resolve("RESOLVED")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a<0.5){
        reject('SOrry, Random number is not supporting you! 2')
    }
    else{
        setTimeout(() => {
            console.log('I am in SetTimeout 2')
            resolve("RESOLVED 2")
        }, 1000);
    }
})


// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);  
// })
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);  
})