
function updateTime(){


    
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
}





let JoziElement = document.querySelector("#jozi");
if (JoziElement) {
let JoziDateElement = JoziElement.querySelector(".date");
let JoziTimeElement = JoziElement.querySelector(".time");

let JohannesburgTime = moment().tz("Africa/Johannesburg");
JoziDateElement.innerHTML = JohannesburgTime.format("MMMM Do YYYY");
JoziTimeElement.innerHTML = JohannesburgTime.format("h:mm:ss [<small>]A[</small>]");
}

}


updateTime();
setInterval(updateTime, 1000);


function updateCity(event){
    let cityTimeZone = event.target.value;
    //console.log(cityTimeZone);
    let cityTime = moment().tz(cityTimeZone);
    //console.log(cityTime.format("MMMM Do YYYY h:mm:ss A"));

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>`

}

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change",updateCity);