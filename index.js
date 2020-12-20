const express = require('express');
const app = express();
// const fetch = require('node-fetch');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
    
let form = document.querySelector('.state-input')
 
let state = getFormData(form)
 
console.log(JSON.stringify(state))




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

const port = process.env.PORT || 3000;
app.listen(port, console.log(`listening at port ${port}`));