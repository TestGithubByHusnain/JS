let p = fetch("https://goweather.fly.dev/weather/New York");

p.then((response) => {
    console.log(response.status)
    console.log(response.status)
    console.log(response.headers)
    return response.json();  // Convert the response to JSON
}).then((data) => {
    console.log(data);  // Log the weather data
});
