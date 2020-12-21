const express=require('express')
const path=require('path')
const app=express()
const staticPath=path.join(__dirname,'public')
const request = require("request");
const bodyParser = require('body-parser')


app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(staticPath)) //set 'public' as static folder



app.get('/cases',(req,res)=>{ //url root for sending home page
    res.sendFile(staticPath+'/html/index.html')
})

app.get('/', function(req,res){
    res.render('index', { location1: null, location2: null, location3: null, error: null });
})

app.post('/', (req,res)=>{
    let state = req.body.state;
    state = state.toLowerCase()
    const locationUrl = `https://sheetlabs.com/NCOR/covidtestcentersinUS?state=${state}`;
        console.log(locationUrl)

    request(locationUrl, function(err, response, body){
        if(err) {
            // res.status(500).send("Internal server error")
            res.status(500).render('index', {location1 : null, location2: null, location3: null, error : 'Internal server error'})
        }
        else{
            let locations = JSON.parse(body)
            if(locations[0] == undefined){
                res.status(400).render('index', {location1 : null,  location2: null, location3: null,error : `${state.toUpperCase()} is not a state`})
                console.log(`${state.toUpperCase()} is not a state`)
            } else{
                let l1 = `${locations[0].centername} @ ${locations[0].address}`
                let l2 = `${locations[1].centername} @ ${locations[1].address}`
                let l3 = `${locations[2].centername} @ ${locations[2].address}`
                res.status(200).render('index', {location1 : l1, location2: l2, location3: l3, error : null})
                // res.status(200).send(weatherText)
            }
        } 
    })
            
})

/////////////////////



const PORT=process.env.PORT || 5000
app.listen(PORT,(()=>{
    console.log('Server running at port',PORT)
}))