const temperature = 19;

const windSpeed = 22;

function calculateWindChill(temperature, windSpeed) {
    if (temperature > 10 || windSpeed < 4.8)
        return "N/A";

    let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    
    return `${windChill.toFixed(2)}°C`;
}

const windChill = calculateWindChill(temperature, windSpeed);

const temp = document.querySelector("#temp");
temp.textContent = `${temperature}°C`

const conditions = document.querySelector("#conditions");
conditions.textContent = "Mostly Cloudy"

const wind = document.querySelector("#wind");
wind.textContent = `${windSpeed} km/h`

const chill = document.querySelector("#chill");
chill.textContent = `${windChill}`