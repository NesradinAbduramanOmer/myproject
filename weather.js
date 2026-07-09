const apiKey = "5052851ae1943b47f026cb5b951d3e9d";

function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        document.getElementById("result").innerHTML = "⚠️ Maqaa magaalaa galchi!";
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod == 200) {
                document.getElementById("result").innerHTML =
                    `<h3>${data.name}</h3>
                    <p>🌡️ Temperature: ${data.main.temp}°C</p>
                    <p>☁️ Weather: ${data.weather[0].description}</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>`;
            } else {
                document.getElementById("result").innerHTML = "❌ Magaalaan hin argamne!";
            }
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "❌ Error!";
        });
}