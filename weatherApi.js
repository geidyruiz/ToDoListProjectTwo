// declared globlal variables

let locationBtn = document.getElementById("mylocation");
let para = document.getElementById("location");
let name = document.getElementById("name");
let mns = document.getElementById('mns');
let temp = document.getElementById('temp');
let temp_max = document.getElementById('temp_max');
let temp_min = document.getElementById('temp_min');
let humidity = document.getElementById('humidity');


//geolocation Function
function getLocation() {

    if (!navigator.geolocation) {
        para.textContent = "Geolocation is not supported by your browser";
    } else {
        para.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    para.textContent = "";
    //Store the URL of a JSON file in a variable with  the coordinates that we found.
    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=0d7be5e6a96025d3d24ae2189cb28e49';
    //Create a new XHR object */
    let request = new XMLHttpRequest();
    // Open a new request using the request() method */
    request.open('GET', requestURL);
    //Set JavaScript to accept JSON from the server 
    request.responseType = 'json';
    //Send the request with the send() method
    request.send();
    //Add an event handler that listens for the onload event of the JSON file/object
    request.onload = function () {
        let weather1 = request.response;
        console.log(weather1);
        main(weather1);
    }

    function main(jsonObj) {
        //Bind the JSON weather object to a var. only the specific array for temp and name
        let main = jsonObj['main'];
        let city = jsonObj['name'];
        let sys = jsonObj['sys'];

        //Seted the textContent property for each elements of the weather section , based on some elements  of JSON content 
        name.textContent = city + ", " + sys.country;
        
        //message about the current weather
        if (main.feels_like >= 28) {
            mns.textContent = "Hot day! Don't forget your water, sunscreen and sunglasses";
            mns.style.color = 'red';
            mns.style.fontSize = "xx-large";
          } else if (main.feels_like <= 15) {
            mns.textContent = "Cool day! Don't forget your coat";
            mns.style.color = '#24a9b5';
            mns.style.fontSize = "xx-large";
          } else {
            mns.textContent = "Nice day!";
            mns.style.color = 'green';
            mns.style.fontSize = "xx-large";
          }
        temp.textContent = "Temp: " + main.temp + "°C" + " /Feels like: " + main.feels_like + "°C ";
        temp_max.textContent = "Temp_max: " + main.temp_max + "°C ";
        temp_min.textContent = "Temp_min: " + main.temp_min + "°C ";
        humidity.textContent = "Humidity: " + main.humidity + "%";
    }


}

function errorMsg() {
    para.textContent = "Sorry, something went wrong!";
}

locationBtn.onclick = getLocation;