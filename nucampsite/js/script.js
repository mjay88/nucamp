const carousel = new bootstrap.Carousel("#homeCarousel", {
	interval: 2000,
	pause: false,
});

const carouselButton = document.getElementById("carouselButton");
const faIcon = document.getElementById("faButton");

carouselButton.addEventListener("click", function () {
	if (faIcon.classList.contains("fa-pause")) {
		faIcon.classList.remove("fa-pause");
		faIcon.classList.add("fa-play");
		carousel.pause();
	} else {
		faIcon.classList.remove("fa-play");
		faIcon.classList.add("fa-pause");
		carousel.cycle();
	}
});

const fetchWeather = async () => {
	try {
		const response = await fetch(createURL());
		const data = await response.json();
		console.log(data);
		displayWeather(data);
	} catch (error) {
		console.log(`Something went wrong:`, error);
	}
};

fetchWeather();

function createURL() {
	const apiKey = process.env.OPEN_WEATHER_API_KEY;
	console.log(apiKey);
	const city = "Seattle";
	const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
	console.log(BASE_URL);
	return BASE_URL;
}

function displayWeather(weatherData) {
	const icon = document.getElementById("weather-icon");
	const weatherIcon = document.createElement("img");
	const temp = document.getElementById("weather-temp");
	const weatherDescription = document.getElementById("weather-description");
	//get and append icon
	const iconCode = weatherData.weather[0].icon;
	const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
	weatherIcon.setAttribute("src", iconURL);
	icon.appendChild(weatherIcon);
	//get and append temp
	const temperature = weatherData.main.temp;
	temp.textContent = temperature;

	//get and append description
	const description = weatherData.weather[0].description;
	weatherDescription.textContent = description;
}
