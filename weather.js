function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        document.getElementById("result").innerHTML = "⚠️ Maqaa magaalaa galchi.";
    } else {
        document.getElementById("result").innerHTML =
            "🌤️ " + city + " keessatti haalli qilleensaa gaarii dha. (Fakkeenya)";
    }
}