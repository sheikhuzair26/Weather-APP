
// Querry String ???//

// https://github.com/search?q=awaise&type=Users

// Protocol : https:
// Server Address : github.com
// path: search
// QuerryString: q=awaise&type=Users

// q=awaise                    1 variable
// type=Users                   2 varibale


// https://www.google.com/search?source=hp&ei=aAxhXauKHIawsAW_hJ-oBA&q=circle&oq=circle&gs_l=psy-ab.3..35i39j0i67l7j0i131i20i263j0i20i263.4820.5727..6006...0.0..0.379.1567.2-2j3......0....1..gws-wiz.......0j0i131.DygX-zklCSM&ved=0ahUKEwir3tO8oZvkAhUGGKwKHT_CB0UQ4dUDCAU&uact=5

// protocol: https 
// Server Address : www.google.com
// Path: search
// query String : source=hp&
// ei=aAxhXauKHIawsAW_hJ-oBA&
// q=circle&
// oq=circle&
// gs_l=psy-ab.3..35i39j0i67l7j0i131i20i263j0i20i263.4820.5727..6006...0.0..0.379.1567.2-2j3......0....1..gws-wiz.......0j0i131.DygX-zklCSM&
// ved=0ahUKEwir3tO8oZvkAhUGGKwKHT_CB0UQ4dUDCAU&
// uact=5

// https://tk-whatsapp.herokuapp.com/messages?gender=female&type=unread

// Sirf Gender male jinky msgs unread hain to & laga kr type define kro

let bootUp = () => {
    $(".controls").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#search-btn").click();
        }
    })
}
function getWeather() {

    const name = document.querySelector("input").value;
    document.querySelector("#popUpControls").style.display = "block";

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=8778faea5e896abe9e6d5216bff87085`)
  .then(function (response) {
            console.log(response);
            document.querySelector(".city").innerHTML = response.data.name;
            document.querySelector(".country").innerHTML = response.data.sys.country;
            document.querySelector(".windSpeed").innerHTML = response.data.wind.speed;
            
            document.querySelector(".degree >span").innerHTML = Math.round(response.data.main.temp);
            document.querySelector(".min").innerHTML = Math.round(response.data.main.temp_min);
            document.querySelector(".max").innerHTML = Math.round(response.data.main.temp_max);


            document.querySelector(".weatherMood").innerHTML = response.data.weather[0].main;
            document.querySelector(".description").innerHTML = response.data.weather[0].description;

            document.querySelector(".humidity > span").innerHTML = response.data.main.humidity;

            let iconName = response.data.weather[0].main;
            if (iconName === `Clouds`) {
                document.querySelector(".icon").innerHTML = `<i class="wi wi-cloud"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/SSoMlZJAVttUk/giphy.gif')";
                document.querySelector("#countryInfoColor").style.color = "black";
               
                // document.body.style.color = "white";

            } else if (iconName === `Clouds`) {      //Night Cloud Mood
                document.querySelector(".icon").innerHTML = `<i class="wi-night-cloudy"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/tMDpNSjp3CIzS/giphy.gif')";


            } else if (iconName === `Rain` || iconName === `Drizzle`) {
                document.querySelector(".icon").innerHTML = `<i class="wi wi-rain"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/dI3D3BWfDub0Q/giphy.gif')";
                document.body.style.color = "black";


            } else if (iconName === `Rain`) {         //Rain Nyt mood
                document.querySelector(".icon").innerHTML = `<i class="wi-night-alt-rain-mix"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/o7VvlSM00GT60/giphy.gif')";
                document.body.style.color = "white";


            } else if (iconName === `Snow`) {
                document.querySelector(".icon").innerHTML = `<i class="wi wi-snow"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/N7ZiLbtDr84Yo/giphy.gif')";
                document.body.style.color = "white";

            } else if (iconName === `Snow`) {        //Nyt mood
                document.querySelector(".icon").innerHTML = `<i class="wi wi-snow"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/697FgQc3vJieI/giphy.gif')";
                document.body.style.color = "white";

            } else if (iconName === `Sunny`) {
                document.querySelector(".icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/8mey7X29Aq96hclggA/giphy.gif')";

            } else if (iconName === `Haze`) {
                document.querySelector(".icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/SotJCbDWOnnWM/giphy.gif')";

            } else if (iconName === `Clear`) {
                document.querySelector(".icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif')";
                document.querySelector("#countryInfoColor").style.color = "black";
                // document.body.style.color = "black";


            } else if (iconName === `Smoke`) {
                document.querySelector(".icon").innerHTML = `<i class="wi wi-smoke"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/Cet9Rug9fz1lK/giphy.gif')";
                document.body.style.color = "white";
            }
            else if (iconName === `Thunderstorm` || iconName === `Mist`) {
                document.querySelector(".icon").innerHTML = `<i class="wi wi-night-alt-snow-thunderstorm"></i>`;
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/o8A56JaNJQFSU/giphy.gif')";
                document.body.style.color = "white";


            }
            else {
                document.querySelector(".icon").innerHTML = `Loading icon.....`;

            }





        })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}