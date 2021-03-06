// const doWorkPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(7)
//     },2000)
// })

// doWorkPromise.then((result)=>{
//     console.log('Success!', result)
// }).catch((error)=>{
//     console.log('error!', error)
// })

//                                 Fulfilled
//                             /
// Promise   -- pending -->
//                             \
//                                 Rejected


const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

// add(3,3).then((sum)=>{
//     console.log(sum)
//     add(sum,5).then((sum2)=>{
//         console.log(sum2)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }).catch((error)=>{
//     console.error()
// })

add(1,2).then((sum)=>{
    console.log(sum)
    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
}).catch((error)=>{
    console.log(error)
})