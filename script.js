//  Accessing all the HTML values
const Inputval = document.getElementById("inputval");
const BtnEle = document.getElementById("btn");
const TempEle = document.getElementById("temp");
const descriptionEle = document.getElementById("description");
const locationEle = document.getElementById("location");
const ImgIcon = document.getElementById("icon");
const SunriseEle = document.getElementById("sunrise") 
const SunsetEle = document.getElementById("sunset") 


let Apikey = "24dc3ac9509d9ef712cb024f5811455f";

BtnEle.addEventListener("click" , () =>{
    if(Inputval.value == ' '){
        alert("plz enter location")
    }
    else{
        // vartiable to store location value
        let loc = Inputval.value
        // let loc = "pune"

        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${Apikey}`;

        fetch(url)
        .then((res) => res.json()) // response header  = converting into pbject form
        .then((da) => {
            console.log(da);
            // object disctructuring
            const { name } = da; //da.name
            const { feels_like } = da.main;
            const { description } = da.weather[0];
            const { icon } = da.weather[0];
            const { Sunrise_time } = da.sys.sunrise
            const { Sunset_time } = da.sys.sunset
            

            // displaying data in the html  page dynmically hased user given loction
            locationEle.innerText = `${name}`
            TempEle.innerText = `${Math.round((feels_like - 273)) }`   // converting to  kelvin to degree
            descriptionEle.innerText = `Weather Conditions:- ${description}`
            ImgIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
            SunriseEle.innerText = `Sunrise Time:- ${Date(Sunrise_time*1000)}`
            console.log(Date(Sunrise_time*1000))
            SunsetEle.innerText = `Sunset Time:- ${Date(Sunset_time*1000)}`
            console.log(Date(Sunset_time*1000))


        }) // object data
        .catch(() => {
            alert("Enter the corrext the location")
        })
    }
    Inputval.value = "";
})
