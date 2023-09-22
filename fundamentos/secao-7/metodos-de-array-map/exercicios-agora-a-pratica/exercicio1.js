// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];


const temperaturesFahrenheit =  temperaturesCelsius.map((temperature) => {
    return (temperature * (9/5) + 32)  
});

console.log(temperaturesFahrenheit);