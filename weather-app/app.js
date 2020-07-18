const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')
const yargs = require('yargs')
//import { request } from "http"

// //using darksky.net weather api
// const url = 'https://api.darksky.net/forecast/6b6c705c72808bec5a155a8d13c1a601/'+'42.3601,-71.0589'+'?units=si'

// request({ url: url, json:true}, (error, response) => {
//     if(error){
//         console.log("Unable to connect to Weather Service!")
       
//     }// console.log(data.currently)
//     else if(response.body.error){
//         console.log("Unable to find location")
//     }
//     else{
//         const data = response.body.currently
//         console.log(response.body.daily.data[0].summary+' It is currently '+data.temperature+' degrees out. There is a '+data.precipProbability+'% chance of rain.')
//     }
// })

// //Geocoding
// //Address -> Lat/Long -> Weather
// //using mapbox.com
// const mapURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9oYW4yOTAxIiwiYSI6ImNrOGV4dHViODAxZGEzZ3FoeWF5d2V6ZnMifQ.c9-Ypj_K6kuWrnDwuQHreA"
// request({url:mapURL, json:true}, (error,response) => {
//     if(error){
//         console.log("Unable to connect to Location services")
    
//     }else if(response.body.features.length===0){
//         console.log('Unable to find location. Try another search.')
//     }
//     else{
//         const data=response.body.features[0]
//         console.log('Lattitude: '+data.center[1]+', Longitude: '+data.center[0])
//     }

// })

var address=""
yargs.command({
    command: 'address',
    describe: 'Location address',
    builder: {
        add: {
            describe: 'Address',
            demandOption:true,
            type:'string' 
        }
    },
    handler(argv){
        address=argv.add
     //   return argv.add
    }
})
yargs.parse()
//const address="fff"
//const address = process.argv[2]
if(!address){
    console.log("Please provide an address")
}else{
geocode(address,(error,data)=>{
    if(error){
        return console.log('Error: '+error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log('Error: '+error)
        }
        console.log(chalk.blue('\nLocation: ')+data.location)
        console.log(chalk.yellow('Forecast: ')+forecastData)
      })
})
}
