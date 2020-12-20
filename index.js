const express=require('express')
const path=require('path')
const app=express()
const staticPath=path.join(__dirname,'public')
const bodyParser = require('body-parser')

app.use(express.static(staticPath)) //set 'public' as static folder



app.get('/',(req,res)=>{ //url root for sending home page
    res.sendFile(staticPath+'/html/index.html')
})


/////////////////////


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));


app.get('/', function(req,res){
    res.render('index');
})

app.post('/', (req,res)=>{
    let state = req.body.state;
    state = state.toLowerCase()
    const statsUrl = `https://api.covidtracking.com/v1/states/${state}/current.json`;
     console.log(statsUrl)

    // request(statsUrl, function(err, response, body){
    //     if(err){
    //         res.render('index', {weather : null, error : 'This aint it'})
    //     }
    //     else{
    //         let weather = JSON.parse(body)
    //         if(weather.main == undefined){
    //             res.render('index', {weather : null, error : 'Memphis isnt a state'})
    //         } else{
    //             let weatherText = `Its ${weather.main.temp} degress in ${weather.name}`
    //             res.render('index', {weather: weatherText, error:null})
    //         }
    //     } 
    // })
        
    })


// app.post('/', (req, res) => {
//         let state = req.body.input
//         let statsUrl = `https://api.covidtracking.com/v1/states/${state}/current.json`
//         let locationUrl = `https://sheetlabs.com/NCOR/covidtestcentersinUS?state=${state}`

//         if(state.length !=2 || parseInt(state) == !NaN){
//             res.status(400).send("Invalid State Abbreviation")
//             return;
//         }
//         request(statsUrl, (err, response, body) =>{
//             if(err || response.status != 200) {
//                 res.status(500).send("Internal server error")
//                 return;
//             }
//             // This might need to be turned into JSON using JSON stringify
//             let responseBody = JSON.stringify(body);
//             // responseBody['newKey'] = "some extra data not provided by the external api"
//             console.log(responseBody)
//             res.status(200).send(responseBody)
//         })
//    })

////////////////////////////////////

const PORT=process.env.PORT || 5000
app.listen(PORT,(()=>{
    console.log('Server running at port',PORT)
}))