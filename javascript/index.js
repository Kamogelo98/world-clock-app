
function updateTime(){   

let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}




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




function updateCity(event){
    let cityTimeZone = event.target.value;

    if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    //console.log(cityTimeZone);
    let cityTime = moment().tz(cityTimeZone);
    //console.log(cityTime.format("MMMM Do YYYY h:mm:ss A"));

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city" style=" border-bottom: none;">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/" style="color: #e91e63; text-decoration: none; font-weight: bold;">← Back to All Cities</a>
`

        updateTime();

}


updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change",updateCity);