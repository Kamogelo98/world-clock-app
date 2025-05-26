
function updateTime(){


    
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");






let JoziElement = document.querySelector("#jozi");
let JoziDateElement = JoziElement.querySelector(".date");
let JoziTimeElement = JoziElement.querySelector(".time");

let JohannesburgTime = moment().tz("Africa/Johannesburg");
JoziDateElement.innerHTML = JohannesburgTime.format("MMMM Do YYYY");
JoziTimeElement.innerHTML = JohannesburgTime.format("h:mm:ss [<small>]A[</small>]");


}


updateTime();
setInterval(updateTime, 1000);
