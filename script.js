var city = localStorage.getItem("city");

$.getJSON(
	"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=226eaa11a5bb05f34d0c2e36766cc55f",
	function (data) {
		var locationName = data.name + ", " + data.sys.country;
		var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
		var temp = Math.floor(data.main.temp);
		var weather = data.weather[0].main;

		document.title = "Weather in " + locationName; // change page title

		$(".location-name").append(locationName);
		$(".icon").attr("src", icon); // draw weather icon
		$(".temp").append(temp + "°C"); // add temperature text
		$(".weather-type").append(weather); // add weather type text
	}
);

// save the city name locally when user submits name
function updateCity() {
	var input = document.getElementById("cityInput").value;
	localStorage.setItem("city", input);
}
