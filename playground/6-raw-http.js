const https = require('https')
const url = 'https://api.darksky.net/forecast/6b6c705c72808bec5a155a8d13c1a601/40,17'

const request=https.request(url,(response)=>{
    let data=''
    response.on('data',(chunk)=>{
        console.log(chunk)
        data=data+chunk.toString()
    })

    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error',(error)=>{
    console.log('An error',error)
})
request.end()