const get_total_cases=()=>{ /// get daily cases for world
    const total_div=document.getElementById('total_world_wide')
    const xhr=new XMLHttpRequest()
    xhr.open('GET', 'https://covid-19-data.p.rapidapi.com/totals')
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("x-rapidapi-key", "610d87651dmshf9a9c790c0f976fp1ba258jsn7a200cea6790");
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
    xhr.send()
    xhr.onload=function(){
        if(this.status==200){
            var total_cases=JSON.parse(this.responseText);
            let html=`<p><span style="font-weight:bold; color:black;">World Wide</span> <br> 
                    Total cases:<span style="color:blue;">${total_cases[0].confirmed.toLocaleString()}</span> <br>
                    Recovered:<span style="color:green;">${total_cases[0].recovered.toLocaleString()} </span><br>
                    Deaths:<span style="color:red;">${total_cases[0].deaths.toLocaleString()} </span><br>
                    Critical:<span style="color:orange;">${total_cases[0].deaths.toLocaleString()}</span>
                </p>
            `
            total_div.innerHTML=html
        }
    }
}

const get_us_cases=()=>{ /// get daily cases for us
    const total_in_us_div=document.getElementById('total_in_us')
    const xhr=new XMLHttpRequest()
    xhr.open('GET', 'https://covid-19-data.p.rapidapi.com/country/code?code=us')
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("x-rapidapi-key", "610d87651dmshf9a9c790c0f976fp1ba258jsn7a200cea6790");
    xhr.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
    xhr.send()
    xhr.onload=function(){
        if(this.status==200){
            var total_cases=JSON.parse(this.responseText);
            let html=`<p><span style="font-weight:bold; color:black;"> United States </span><br>
             
                    Total cases:<span style="color:blue;">${total_cases[0].confirmed.toLocaleString()}</span> <br>
                    Recovered:<span style="color:green;">${total_cases[0].recovered.toLocaleString()} </span><br>
                    Deaths:<span style="color:red;">${total_cases[0].deaths.toLocaleString()} </span><br>
                    Critical:<span style="color:orange;">${total_cases[0].deaths.toLocaleString()}</span>
                </p>
            `
            total_in_us_div.innerHTML=html
        }
    }
}

get_total_cases()

setTimeout(() => { // putting 1s delay becaues api providers limit the call per sec to 1.
    get_us_cases()
}, 1500);
